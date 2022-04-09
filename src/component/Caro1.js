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


export default function Caro1(props) {

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
   

      {/* <Grid container spacing={2}>
   
              <Grid item xs={12} sm={12} md={4}>
                
              </Grid>
          
      </Grid> */}
        <Grid container spacing={2}>
   
          <Grid item xs={12} sm={12} md={12}>
         
          

      <div className="slider">
        <div className="slide-track">
            {items.map((item, i) =>(

                    <div className="slide"> 
                      <Item  key={i} item={item} />
                    </div>
                  
            ))}
            
              
        </div>
      </div>
              
      
          </Grid>



          
          </Grid>



    </Outercontainer>
  );
}


function Item(props) {
  return (
   
      <img
        src={props.item.description}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
   
  );
}
