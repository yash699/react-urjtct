import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({


  boxResize: {
    marginBottom: '1rem',
    // height: 'fit-content',
    // [theme.breakpoints.down('md')]: {
    //   marginBottom: '3.5rem',
    // },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    
    },
  },
}));


export default function CarouselBox(props) {

  const classes = useStyles();


  const Outercontainer = styled(Box)(({ theme }) => ({
    height: "280px",
    // [theme.breakpoints.up('sm')]: {
    //   marginBottom: '0',
    //   marginTop: '4rem',
    //   height: 'fit-content',
    // },
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: '-2rem',
    //    marginTop: '6rem',
    //   height: 'fit-content',
    // },



  }));

  var items = [
    {
      name: 'Random Name #1',
      description:
        'https://img.dmart.in/images/rwd/banners/hmpg/15mar22-crsl-halfprice-kalmibel.jpg',
    },
    {
      name: 'Random Name #2',
      description:
        'https://img.dmart.in/images/rwd/banners/hmpg/15mar22-crsl-dmartgrocery.jpg',
    },
  ];

  return (
    <Outercontainer className={classes.boxResize}>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'transparent',
         
          width:'100%',
           height: 'fit-content',
        }}
        className={classes.boxResize}
      >
       <Carousel
                      indicators={false}
                      navButtonsAlwaysInvisible={true}
                      swipe={true}
                      animation={'slide'}
                      duration={100}
                    >
          {items.map((item, i) => (
             
                <Item  key={i} item={item} />
                              
                
             
           ))}
          </Carousel>
        
      </Container>


     

    </Outercontainer>
  );
}

function Item(props) {
  return (
    <div>
      <img
        src={props.item.description}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
