import React, { useEffect, useState, useCallback } from 'react';
import { useValue } from '../../context/ContextProvider';
import { getOffers } from '../../actions/offer';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Supercluster from 'supercluster';
import './cluster.css';
import { Avatar, Paper, Tooltip } from '@mui/material';
import GeocoderInput from '../sidebar/GeocoderInput';
import PopupOffer from './PopupOffer';

const supercluster = new Supercluster({
  radius: 75,
  maxZoom: 20,
});

const ClusterMap = () => {
  const {
    state: { filteredOffers },
    dispatch,
    mapRef,
  } = useValue();
  const [points, setPoints] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [bounds, setBounds] = useState([-180, -85, 180, 85]);
  const [zoom, setZoom] = useState(0);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    getOffers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const points = filteredOffers.map((offer) => ({
      type: 'Feature',
      properties: {
        cluster: false,
        offerId: offer._id,
        price: offer.price,
        title: offer.title,
        description: offer.description,
        lng: offer.lng,
        lat: offer.lat,
        images: offer.images,
        uPhoto: offer.uPhoto,
        uName: offer.uName,
      },
      geometry: {
        type: 'Point',
        coordinates: [parseFloat(offer.lng), parseFloat(offer.lat)],
      },
    }));
    setPoints(points);
  }, [filteredOffers]);

  useEffect(() => {
    supercluster.load(points);
    setClusters(supercluster.getClusters(bounds, zoom));
  }, [points, zoom, bounds]);

  const updateBounds = useCallback(() => {
    if (mapRef.current) {
      const newBounds = mapRef.current.getMap().getBounds().toArray().flat();
      setBounds(newBounds);
    }
  }, [mapRef]);

  useEffect(() => {
    updateBounds();
  }, [updateBounds, mapRef]);

  return (
      <ReactMapGL
          initialViewState={{ latitude: 51.5072, longitude: 0.1276 }}
          mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          ref={mapRef}
          onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
      >
        {clusters.map((cluster) => {
          const { cluster: isCluster, point_count } = cluster.properties;
          const [longitude, latitude] = cluster.geometry.coordinates;
          if (isCluster) {
            return (
                <Marker
                    key={`cluster-${cluster.id}`}
                    longitude={longitude}
                    latitude={latitude}
                >
                  <div
                      className="cluster-marker"
                      style={{
                        width: `${10 + (point_count / points.length) * 20}px`,
                        height: `${10 + (point_count / points.length) * 20}px`,
                      }}
                      onClick={() => {
                        const zoom = Math.min(
                            supercluster.getClusterExpansionZoom(cluster.id),
                            20
                        );
                        mapRef.current.flyTo({
                          center: [longitude, latitude],
                          zoom,
                          speed: 1,
                        });
                      }}
                  >
                    {point_count}
                  </div>
                </Marker>
            );
          }

          return (
              <Marker
                  key={`offer-${cluster.properties.offerId}`}
                  longitude={longitude}
                  latitude={latitude}
              >
                <Tooltip title={cluster.properties.uName}>
                  <Avatar
                      src={cluster.properties.uPhoto}
                      component={Paper}
                      elevation={2}
                      onClick={() => setPopupInfo(cluster.properties)}
                  />
                </Tooltip>
              </Marker>
          );
        })}
        <GeocoderInput />
        {popupInfo && (
            <Popup
                longitude={popupInfo.lng}
                latitude={popupInfo.lat}
                maxWidth="auto"
                closeOnClick={false}
                focusAfterOpen={false}
                onClose={() => setPopupInfo(null)}
            >
              <PopupOffer {...{ popupInfo }} />
            </Popup>
        )}
      </ReactMapGL>
  );
};

export default ClusterMap;
