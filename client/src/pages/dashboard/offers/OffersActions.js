import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';
import { useValue } from '../../../context/ContextProvider';
import { clearOffer, deleteOffer } from '../../../actions/offer';
import { useNavigate } from 'react-router-dom';

const OffersActions = ({ params }) => {
  const { _id, lng, lat, price, title, description, images, uid } = params.row;
  const {
    dispatch,
    state: { currentUser, updatedOffer, addedImages, images: newImages },
  } = useValue();

  const navigate = useNavigate();
  const handleEdit = () => {
    if (updatedOffer) {
      clearOffer(dispatch, currentUser, addedImages, updatedOffer);
    } else {
      clearOffer(dispatch, currentUser, newImages);
    }
    dispatch({ type: 'UPDATE_LOCATION', payload: { lng, lat } });
    dispatch({
      type: 'UPDATE_DETAILS',
      payload: { price, title, description },
    });
    dispatch({ type: 'UPDATE_IMAGES', payload: images });
    dispatch({ type: 'UPDATE_UPDATED_OFFER', payload: { _id, uid } });
    dispatch({ type: 'UPDATE_SECTION', payload: 2 });
    navigate('/');
  };
  return (
    <Box>
      <Tooltip title="View offer details">
        <IconButton
          onClick={() => dispatch({ type: 'UPDATE_OFFER', payload: params.row })}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this offer">
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this offer">
        <IconButton
          onClick={() => deleteOffer(params.row, currentUser, dispatch)}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default OffersActions;
