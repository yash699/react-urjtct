import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const useStyles = makeStyles((theme) => ({
  outerDiv: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },
    
  },

  imgHover: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
   }
  },
  weightTitle: {
    whiteSpace: "pre",
    [theme.breakpoints.down("md")]: {
      whiteSpace: "unset",
    },
  },


}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Product() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#fff',
        boxShadow:
          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        marginBottom: '1.3rem',
        padding:'10px'
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ fontSize: '14px',fontWeight:'700', textAlign: 'left' }}
      >
        Monthly Essentials
      </Typography>

      <Grid container spacing={0} >
    
        <Grid item xs={6} sm={4} md={3} lg={3}>
            <Item
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'unset',
                  textAlign: 'center',
                }}
              >


              <Card  
              sx={{ border: '0.5px solid #d3d3d3', borderRadius: '4px',maxWidth: 300,paddingTop:'10px' }}>
                <CardMedia
                      component="img"
                      height="140"
                      image="https://image.shutterstock.com/image-photo/raw-meat-pork-steak-600w-212791603.jpg"
                      alt="green iguana"
                      sx={{width:'unset',display:'unset'}}
                      className={classes.outerDiv}
                    />
                  <CardContent>
                   <Tooltip title="Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)" followCursor arrow>
                      <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'left',overflow:'hidden',height:'40px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
                      Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)

                      </Typography>
                    </Tooltip>

                    <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'center',overflow:'hidden',whiteSpace:'wrap',marginBottom:'5px',fontWeight:'100',color:'#727272'}}>
                      <span>Bone-in</span> | <span>Surmai Steaks</span>

                      </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center',display:'block',marginBottom:'5px'}} className={classes.weightTitle}>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Net Weight</b>:500g </span>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Gross Weight</b>:500g </span>
                    </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center'}}>
                      <b style={{fontSize:'18px',color:'green',marginRight:'6px'}}>₹ 371</b>
                      <span style={{ textDecoration: 'line-through',marginRight:'6px' }}>
                        ₹ 2990
                      </span>
                      <span style={{color:'green' }}> 61% Off</span>

                    </Typography>



                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>

       




            </Item>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3}>
            <Item
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'unset',
                  textAlign: 'center',
                }}
              >


              <Card  
              sx={{ border: '0.5px solid #d3d3d3', borderRadius: '4px',maxWidth: 300,paddingTop:'10px' }}>
                <CardMedia
                      component="img"
                      height="140"
                      image="https://image.shutterstock.com/image-photo/selective-focus-fresh-indian-mackerel-600w-1834718110.jpg"
                      alt="green iguana"
                      sx={{width:'unset',display:'unset'}}
                      className={classes.outerDiv}
                    />
                  <CardContent>
                   <Tooltip title="Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)" followCursor arrow>
                      <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'left',overflow:'hidden',height:'40px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
                      Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)

                      </Typography>
                    </Tooltip>

                    <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'center',overflow:'hidden',whiteSpace:'wrap',marginBottom:'5px',fontWeight:'100',color:'#727272'}}>
                      <span>Bone-in</span> | <span>Surmai Steaks</span>

                      </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center',display:'block',marginBottom:'5px'}} className={classes.weightTitle}>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Net Weight</b>:500g </span>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Gross Weight</b>:500g </span>
                    </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center'}}>
                      <b style={{fontSize:'18px',color:'green',marginRight:'6px'}}>₹ 371</b>
                      <span style={{ textDecoration: 'line-through',marginRight:'6px' }}>
                        ₹ 2990
                      </span>
                      <span style={{color:'green' }}> 61% Off</span>

                    </Typography>



                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>

       




            </Item>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3}>
            <Item
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'unset',
                  textAlign: 'center',
                }}
              >


              <Card  
              sx={{ border: '0.5px solid #d3d3d3', borderRadius: '4px',maxWidth: 300,paddingTop:'10px' }}>
                <CardMedia
                      component="img"
                      height="140"
                      image="https://image.shutterstock.com/image-photo/white-pomfret-fish-placed-on-600w-1514588441.jpg"
                      alt="green iguana"
                      sx={{width:'unset',display:'unset'}}
                      className={classes.outerDiv}
                    />
                  <CardContent>
                   <Tooltip title="Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)" followCursor arrow>
                      <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'left',overflow:'hidden',height:'40px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
                      Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)

                      </Typography>
                    </Tooltip>

                    <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'center',overflow:'hidden',whiteSpace:'wrap',marginBottom:'5px',fontWeight:'100',color:'#727272'}}>
                      <span>Bone-in</span> | <span>Surmai Steaks</span>

                      </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center',display:'block',marginBottom:'5px'}} className={classes.weightTitle}>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Net Weight</b>:500g </span>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Gross Weight</b>:500g </span>
                    </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center'}}>
                      <b style={{fontSize:'18px',color:'green',marginRight:'6px'}}>₹ 371</b>
                      <span style={{ textDecoration: 'line-through',marginRight:'6px' }}>
                        ₹ 2990
                      </span>
                      <span style={{color:'green' }}> 61% Off</span>

                    </Typography>



                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>

       




            </Item>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={3}>
            <Item
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'unset',
                  textAlign: 'center',
                }}
              >


              <Card  
              sx={{ border: '0.5px solid #d3d3d3', borderRadius: '4px',maxWidth: 300,paddingTop:'10px' }}>
                <CardMedia
                      component="img"
                      height="140"
                      image="https://image.shutterstock.com/image-photo/fresh-sea-fish-bombay-duck-600w-1800040981.jpg"
                      alt="green iguana"
                      sx={{width:'unset',display:'unset'}}
                      className={classes.outerDiv}
                    />
                  <CardContent>
                   <Tooltip title="Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)" followCursor arrow>
                      <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'left',overflow:'hidden',height:'40px',whiteSpace:'wrap',marginBottom:'10px',fontWeight:'600'}}>
                      Fresh Ratnagiri Alphonso Mango : 6 Pieces (Approx. 220 gm - 230 gm Per Pc)

                      </Typography>
                    </Tooltip>

                    <Typography  className="page-wrap"  variant="p" component="div"  sx={{textAlign:'center',overflow:'hidden',whiteSpace:'wrap',marginBottom:'5px',fontWeight:'100',color:'#727272'}}>
                      <span>Bone-in</span> | <span>Surmai Steaks</span>

                      </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center',display:'block',marginBottom:'5px'}} className={classes.weightTitle}>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Net Weight</b>:500g </span>
                      <span><b style={{fontSize:'13px',color:'#333',marginRight:'6px'}}>Gross Weight</b>:500g </span>
                    </Typography>

                    <Typography variant="div" color="text.secondary"  sx={{textAlign:'center'}}>
                      <b style={{fontSize:'18px',color:'green',marginRight:'6px'}}>₹ 371</b>
                      <span style={{ textDecoration: 'line-through',marginRight:'6px' }}>
                        ₹ 2990
                      </span>
                      <span style={{color:'green' }}> 61% Off</span>

                    </Typography>



                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>

       




            </Item>
        </Grid>


      
      </Grid>
    </Container>
  );
}
