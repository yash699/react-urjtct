import React from 'react';
import { styled, alpha } from '@mui/material/styles';

const LogoBox = styled('div')(({ theme }) => ({
  logo_box_style: {
    display: 'flex',
    flexGrow: '1',
    marginTop: '20px',
    backgroundColor: 'red',
    [theme.breakpoints.up('xs')]: {
      flexGrow: 1,
    },
  },
}));

export default function Rope() {
  return <div>Foter</div>;
}
