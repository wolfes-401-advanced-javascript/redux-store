import React from 'react';
import { connect } from 'react-redux';
import { Paper, Toolbar, Typography, AppBar } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '50px',
    
  },

  nav: {
    display: 'flex',

  },

  links: {
    textDecoration: 'none',
    color: '#fff',
  },
  '&:visited': {
    color: '#fff',
  },
  '&:hover': {
    color: '#fa2',
  },

  cart: {
    
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingRight: '10px',
    
      
  },

}));

const Header = (props) => {
  const classes = useStyles();
  
  return (
  
    <Paper>
      <AppBar position="static">
        <div className={classes.nav}>
              <Link className={classes.links} to="/">Home</Link>
            </div>
        <div className={classes.title}>
          <Toolbar>
            <Typography id="title" variant="h3" component="h1" gutterBottom>THE 401 STORE </Typography>
          </Toolbar>
          
            
         
          <div className={classes.cart}>
          <Link className={classes.links} to="/cart">
            <ShoppingCartOutlined />
            <Typography variant="p" component="p">Cart ({props.cart.length})</Typography>
            </Link>
          </div>
        </div>
      </AppBar>
    </Paper>

  );
};const mapStateToProps = state => {

  return {
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Header);