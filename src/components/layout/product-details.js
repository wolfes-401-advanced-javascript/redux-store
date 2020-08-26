import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { removeInventory } from '../../store/products.js';
import { addItem } from '../store/cart.js';

const If = props => {
  return props.condition ? props.children : null;
};

const useStyles = makeStyles((theme) => ({

  productsRoot: {
    width: '65vw',
  },

  heading: {
    display: 'flex',
    paddingLeft: '24px',
  },

  list: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px',

  },

  listItem: {
    display: 'inline',
    
  },

  details: {
    display: 'flex',
  },

}));

const ProductDetails = (props) => {

  const classes = useStyles();
  function addToCart(product) {
    props.removeInventory(product);
    props.addItem(product);
  }

return (

  <div className={classes.productsRoot}>
    <Paper variant="outlined">
      <Typography id="product-title" variant="h4" component="h4">Product Details</Typography>
      <Card variant="outlined">
        <ListItem>Product: {props.details.name}</ListItem>
        <ListItem>Description: {props.details.description}</ListItem>
        <ListItem>Price: {props.details.price}</ListItem>
        <ListItem>In Stock: {props.details.inventory}</ListItem>
        <Button variant="outlined" onClick={() => addToCart(props.details)}>Add To Cart</Button>
      </Card>
      <Card variant="outlined">
        <Typography variant="h5" component="h5">Coming Soon</Typography>
        <ListItem>Reviews</ListItem>
        <ListItem>Suggested Products</ListItem>
      </Card>
    </Paper>
  </div>

  );
};

const mapStateToProps = state => {

  return {
    products: state.products,
    cart: state.cart,
    details: state.product_details,
  };
};

const dispatchStateToProps = { removeInventory, addItem };

export default connect(
  mapStateToProps,
  dispatchStateToProps,
)(ProductDetails);