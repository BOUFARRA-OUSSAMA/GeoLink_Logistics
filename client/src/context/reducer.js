const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return { ...state, openLogin: true };
    case 'CLOSE_LOGIN':
      return { ...state, openLogin: false };

    case 'START_LOADING':
      return { ...state, loading: true };
    case 'END_LOADING':
      return { ...state, loading: false };

    case 'UPDATE_ALERT':
      return { ...state, alert: action.payload };

    case 'UPDATE_PROFILE':
      return { ...state, profile: action.payload };

    

    case 'UPDATE_IMAGES':
      return { ...state, images: [...state.images, ...action.payload] };
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter((image) => image !== action.payload),
      };
    case 'UPDATE_DETAILS':
      return { ...state, details: { ...state.details, ...action.payload } };
    case 'UPDATE_LOCATION':
      return { ...state, location: action.payload };
    case 'UPDATE_UPDATED_OFFER':
      return { ...state, updatedOffer: action.payload };
    case 'UPDATE_DELETED_IMAGES':
      return {
        ...state,
        deletedImages: [...state.deletedImages, ...action.payload],
      };
    case 'UPDATE_ADDED_IMAGES':
      return {
        ...state,
        addedImages: [...state.addedImages, ...action.payload],
      };
    case 'RESET_OFFER':
      return {
        ...state,
        images: [],
        details: { title: '', description: '', price: 0 },
        location: { lng: 0, lat: 0 },
        updatedOffer: null,
        deletedImages: [],
        addedImages: [],
      };

    case 'UPDATE_OFFERS':
      return {
        ...state,
        offers: action.payload,
        addressFilter: null,
        priceFilter: 50,
        filteredOffers: action.payload,
      };
    case 'FILTER_PRICE':
      return {
        ...state,
        priceFilter: action.payload,
        filteredOffers: applyFilter(
          state.offers,
          state.addressFilter,
          action.payload
        ),
      };
    case 'FILTER_ADDRESS':
      return {
        ...state,
        addressFilter: action.payload,
        filteredOffers: applyFilter(
          state.offers,
          action.payload,
          state.priceFilter
        ),
      };
    case 'CLEAR_ADDRESS':
      return {
        ...state,
        addressFilter: null,
        priceFilter: 50,
        filteredOffers: state.offers,
      };

    case 'UPDATE_OFFER':
      return { ...state, offer: action.payload };

    case 'UPDATE_USERS':
      return { ...state, users: action.payload };
    case 'DELETE_OFFER':
      return {
        ...state,
        offers: state.offers.filter((offer) => offer._id !== action.payload),
      };

    case 'UPDATE_SECTION':
      return { ...state, section: action.payload };

    default:
      throw new Error('No matched action!');
  }
};

export default reducer;

const applyFilter = (offers, address, price) => {
  let filteredOffers = offers;
  if (address) {
    const { lng, lat } = address;
    filteredOffers = filteredOffers.filter((offer) => {
      const lngDifference = Math.abs(lng - offer.lng);
      const latDifference = Math.abs(lat - offer.lat);
      return lngDifference <= 1 && latDifference <= 1;
    });
  }

  if (price < 50) {
    filteredOffers = filteredOffers.filter((offer) => offer.price <= price);
  }

  return filteredOffers;
};
