import React from 'react';

import Box from '@mui/material/Box';
import Carousel from './Carousel';

import Poster from './poster';

import Demo from './Demo';

import BackToTop from './BackToTop';

export default function Main_body() {
  return (
    <Box sx={{ backgroundColor: '#f0f2f6' }}>
      {/* <Carousel /> */}

      <Poster />

      <Poster />

      <Demo />
    </Box>
  );
}
