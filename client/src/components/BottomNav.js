import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import {
  AddLocationAlt,
  LocalShipping,
  LocationOn,
} from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import ClusterMap from './map/ClusterMap';
import Offers from './offers/Offers';
import AddOffer from './addOffer/AddOffer';
import Protected from './protected/Protected';
import { useValue } from '../context/ContextProvider';

const BottomNav = () => {
  const {
    state: { section },
    dispatch,
  } = useValue();
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [section]);

  return (
    <Box ref={ref}>
      {
        {
          0: <ClusterMap />,
          1: <Offers />,
          2: (
            <Protected>
              <AddOffer />
            </Protected>
          ),
        }[section]
      }
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          backgroundColor: '#333333', // Dark gray background
        }}
      >
        <BottomNavigation
          showLabels
          value={section}
          sx={{
            backgroundColor: '#333333', // Dark gray for BottomNavigation
          }}
          onChange={(e, newValue) =>
            dispatch({ type: 'UPDATE_SECTION', payload: newValue })
          }
        >
          <BottomNavigationAction
            label="Map"
            icon={<LocationOn />}
            sx={{ color: 'white' }} // Set icon and text color to white
          />
          <BottomNavigationAction
            label="Offers"
            icon={<LocalShipping />}
            sx={{ color: 'white' }} // Set icon and text color to white
          />
          <BottomNavigationAction
            label="Add"
            icon={<AddLocationAlt />}
            sx={{ color: 'white' }} // Set icon and text color to white
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
