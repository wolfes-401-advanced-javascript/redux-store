/* eslint-disable react/jsx-key */
import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Button } from '@material-ui/core';
import { addInventory } from '../../store/products.js';
import { removeItem } from '../../store/cart.js';
import { makeStyles } from '@material-ui/core/styles';

const If = props => {
  return props.condition ? props.children : null;
};

const useStyles = makeStyles((theme) => ({
  cart: {
    position: 'fixed',
    right: '10px',
    
    width: 'fit-content',
    zIndex: '2',
  },

  

  card: {
    
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingRight: '10px',
    
      
  },

  

}));


const SimpleCart = (props) => {
  const classes = useStyles();

  function removeFromCart(product) {
    props.addInventory(product);
    props.removeItem(product);
  }

  return (

    <div className={classes.cart}>
      <Paper variant="outlined">
        <List className={classes.list}>
          {props.cart.map((product, idx) => (
            // eslint-disable-next-line react/jsx-key
            <div className={classes.card}>
              <Card variant="outlined">
                <ListItem key={product.name} >Product: {product.name}</ListItem>
                <Button variant="outlined" onClick={() => removeFromCart(product)}>Remove</Button>
              </Card>
            </div>
          ))}
        </List>
      </Paper>
    </div>
  )

}


const mapStateToProps = state => {

  return {
    categories: state.categories,
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = { addInventory, removeItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCart);