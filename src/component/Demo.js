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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.03)',
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

export default function Demo() {
  const classes = useStyles();

  return (
    <footer>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: '#232F3E',

          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          marginTop: '2rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding alignItems="center">
                    <a>
                      <ListItemText
                        primary="Get to Know Us"
                        sx={{ color: '#fff' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText primary="FAQs" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Privacy Policy"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Returns & Refunds"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Terms & Conditions"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                </List>
              </nav>
            </Item>
          </Grid>

          <Grid item xs={12} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText
                        primary="Get to Know Us"
                        sx={{ color: '#fff' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText primary="FAQs" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Privacy Policy"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Returns & Refunds"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Terms & Conditions"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                </List>
              </nav>
            </Item>
          </Grid>

          <Grid item xs={12} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText
                        primary="Get to Know Us"
                        sx={{ color: '#fff' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText primary="FAQs" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Privacy Policy"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Returns & Refunds"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Terms & Conditions"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                </List>
              </nav>
            </Item>
          </Grid>

          <Grid item xs={12} sm={8} md={3} sx={{ padding: '10px!important' }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 'unset' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText
                        primary="Get to Know Us"
                        sx={{ color: '#fff' }}
                      />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <a>
                      <ListItemText primary="FAQs" sx={{ color: '#fff' }} />
                    </a>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Privacy Policy"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Returns & Refunds"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Terms & Conditions"
                      sx={{ color: '#fff' }}
                    />
                  </ListItem>
                </List>
              </nav>
            </Item>
          </Grid>

          <Divider sx={{ borderTop: '1px solid #fff' }} />
          <Grid item xs={12} md={12} sx={{ padding: '10px!important' }}>
            <Item
              sx={{
                backgroundColor: 'transparent',
                color: '#fff',
                boxShadow: 'unset',
                width: '100%',
              }}
            >
              Copyright © 2067 E-Commerce Limited (EL). All Rights Reserved.
            </Item>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
