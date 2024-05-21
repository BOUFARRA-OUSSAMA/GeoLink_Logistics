import {
  Avatar,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from '@mui/material';
import { useValue } from '../../context/ContextProvider';
import { StarBorder } from '@mui/icons-material';

const Offers = () => {
  const {
    state: { filteredOffers },
    dispatch,
  } = useValue();
  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
      >
        {filteredOffers.map((offer) => (
          <Card key={offer._id} sx={{ maxHeight: 350 }}>
            <ImageListItem sx={{ height: '100% !important' }}>
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)',
                }}
                title={offer.price === 0 ? 'Negotiable' : '$' + offer.price}
                actionIcon={
                  <Tooltip title={offer.uName} sx={{ mr: '5px' }}>
                    <Avatar src={offer.uPhoto} />
                  </Tooltip>
                }
                position="top"
              />
              <img
                src={offer.images[0]}
                alt={offer.title}
                loading="lazy"
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch({ type: 'UPDATE_OFFER', payload: offer })}
              />
              <ImageListItemBar
                title={offer.title}
                actionIcon={
                  <Rating
                    sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
                    name="offer-rating"
                    defaultValue={3.5}
                    precision={0.5}
                    emptyIcon={
                      <StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />
                    }
                  />
                }
              />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
    </Container>
  );
};

export default Offers;
