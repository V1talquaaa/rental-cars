import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';




export const Sidebar = ({mode, setMode}) => {

  return (
<>
    <Box
      flex={0.5}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position='fixed'>
      <List>
          <ListItem disablePadding>
            <ListItemButton href='home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='cars'>
              <ListItemIcon>
                <DirectionsCarFilledOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Our Cars" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='favourite'>
              <ListItemIcon>
                <FavoriteBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Favourites" />
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
    </Box>
    </>
  );
};
