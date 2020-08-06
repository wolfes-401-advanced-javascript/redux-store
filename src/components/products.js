import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import products, { update, fetchProducts } from '../store/products.js';

const Update = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchProducts();
  }, []);

  return(
    <List>
      {props.products.map(product => {
        return (
          <ListItem key={product.name}>
            <ListItemText onClick={() => props.update(product.category)}>{ product.name } </ListItemText>
          </ListItem>
       )
      })}
      
    </List>
    
  )
}

const mapStateToProps = state => {
  return state.products;
}

export default connect(mapStateToProps, { update, fetchProducts })(Update);