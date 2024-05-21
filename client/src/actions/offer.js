import deleteImages from './utils/deleteImages';
import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/offer';

export const createOffer = async (offer, currentUser, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url, body: offer, token: currentUser?.token },
    dispatch
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The offer has been added successfully',
      },
    });
    clearOffer(dispatch, currentUser);
    dispatch({ type: 'UPDATE_SECTION', payload: 0 });
    dispatch({ type: 'UPDATE_OFFER', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getOffers = async (dispatch) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData({ url, method: 'GET' }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_OFFERS', payload: result });
  }
  dispatch({ type: 'END_LOADING' });
};

export const deleteOffer = async (offer, currentUser, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url: `${url}/${offer._id}`, method: 'DELETE', token: currentUser?.token },
    dispatch
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The offer has been deleted successfully',
      },
    });

    dispatch({ type: 'DELETE_OFFER', payload: result._id });
    deleteImages(offer.images, offer.uid);
  }

  dispatch({ type: 'END_LOADING' });
};

export const updateOffer = async (
  offer,
  currentUser,
  dispatch,
  updatedOffer,
  deletedImages
) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    {
      url: `${url}/${updatedOffer._id}`,
      method: 'PATCH',
      body: offer,
      token: currentUser?.token,
    },
    dispatch
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The offer has been updated successfully',
      },
    });

    clearOffer(dispatch, currentUser, deletedImages, updatedOffer);
    dispatch({ type: 'UPDATE_SECTION', payload: 0 });
    dispatch({ type: 'UPDATE_OFFER', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const clearOffer = (
  dispatch,
  currentUser,
  images = [],
  updatedOffer = null
) => {
  dispatch({ type: 'RESET_OFFER' });
  localStorage.removeItem(currentUser.id);
  if (updatedOffer) {
    deleteImages(images, updatedOffer.uid);
  } else {
    deleteImages(images, currentUser.id);
  }
};

export const storeOffer = (
  location,
  details,
  images,
  updatedOffer,
  deletedImages,
  addedImages,
  userId
) => {
  if (
    location.lng ||
    location.lat ||
    details.price ||
    details.title ||
    details.description ||
    images.length
  ) {
    localStorage.setItem(
      userId,
      JSON.stringify({
        location,
        details,
        images,
        updatedOffer,
        deletedImages,
        addedImages,
      })
    );
    return true;
  } else {
    return false;
  }
};
