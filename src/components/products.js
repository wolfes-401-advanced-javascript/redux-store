import React from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import products, {update} from '../store/products.js';

const Update = (props) => {
  console.log(props);
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

export default connect(mapStateToProps, { update })(Update);