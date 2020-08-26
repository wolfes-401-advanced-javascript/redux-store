import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Button } from '@material-ui/core';
import { removeInventory, fetchProducts } from '../store/products.js';
import { getOneProduct } from '../store/product-details.js';
import { addItem } from '../store/cart.js';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

  ListItem: {
    display: 'inline',
  },

  links: {
    textDecoration: 'none',
  },

  details: {
    display: 'flex',
  },

}));

const Products = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const classes = useStyles();

function addToCart(product) {
  props.removeInventory(product);
  props.addItem(product);
};


  return(

    <div className={classes.productsRoot}>
      <Paper variant="outlined">
        <Typography id="product-title" variant="h4" component="h4">Products</Typography>
        <List>
          {props.products.map((product, idx) => (
            // eslint-disable-next-line react/jsx-key
            <IF condition={product.category === props.categories.activeCategory.normalizedName && product.inventory>0}>
              <Card variant="outlined">
                <ListItem key={idx + '1'} >Product: {product.name}</ListItem>
                <ListItem key={idx + '2'} >Description: {product.description}</ListItem>
                <ListItem key={idx + '3'} >Price: ${product.price}</ListItem>
                <ListItem key={idx + '4'} >In Stock: {product.inventory} </ListItem>
                <Link className={classes.links} to="/products">
                  <Button variant="outlined" onClick={() => props.getOneProduct(product)}>View Details</Button>
                </Link>
                  <Button variant="outlined" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card>
            </IF>
          ))}
          
        </List>
      </Paper>
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    products: state.products,
  };
};

const mapDispatchToProps = { removeInventory, addItem, fetchProducts, getOneProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  )(Products);