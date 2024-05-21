import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import reducer from './reducer';

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: 'info', message: '' },
  profile: { open: false, file: null, photoURL: '' },
  images: [],
  details: { title: '', description: '', price: 0 },
  location: { lng: 0, lat: 0 },
  updatedOffer : null,
  deletedImages: [],
  addedImages: [],
  offers: [],
  priceFilter: 50,
  addressFilter: null,
  filteredOffers: [],
  offer: null,
  users: [],
  section: 0,
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mapRef = useRef();
  const containerRef = useRef();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      dispatch({ type: 'UPDATE_USER', payload: currentUser });
    }
  }, []);

  useEffect(() => {
    if (state.currentUser) {
      const offer = JSON.parse(localStorage.getItem(state.currentUser.id));
      if (offer) {
        dispatch({ type: 'UPDATE_LOCATION', payload: offer.location });
        dispatch({ type: 'UPDATE_DETAILS', payload: offer.details });
        dispatch({ type: 'UPDATE_IMAGES', payload: offer.images });
        dispatch({ type: 'UPDATE_UPDATED_OFFER', payload: offer.updatedOffer });
        dispatch({
          type: 'UPDATE_DELETED_IMAGES',
          payload: offer.deletedImages,
        });
        dispatch({ type: 'UPDATE_ADDED_IMAGES', payload: offer.addedImages });
      }
    }
  }, [state.currentUser]);
  return (
    <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
