import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { clearCart } from '../../store/cart.js';
import { makeStyles } from '@material-ui/core/styles';

const If = props => {
  return props.condition ? props.children : null;
};

const useStyles = makeStyles((theme) => ({

}));

const ShoppingCart = (props) => {

  const classes = useStyles();

  const [checkout, setCheckout] = useState('');
  const [sameAsShipping, setSameAsShipping] = useState(false);

  function calculateTotal() {
    let total = 0;
    props.cart.forEach(product => {
      total += parseFloat(product.price);
    });

    function generateOrderNumber() {
      return Math.floor((Math.random() * 10000) + 1);
    }

    return (

      <div className={classes.cart}>
        <If condition={checkout === ''}>
          <Paper variant="outlined">
            <Typography id="product-title" variant="h6" >Shopping Cart</Typography>
            <List className={classes.list}>

              {props.cart.map((product, idx) => (
                //eslint-disable-next-line react/jsx-key
                <div className={classes.card}>
                  <Card variant="outlined">
                    <ListItem key={product.name} >Product: {product.name}</ListItem>
                    <ListItem key={product.price} >Price: ${product.price}</ListItem>
                  </Card>
                </div>
              ))}
            </List>
            <Card variant="outlined">
              <If condition={calculateTotal() === '0.00'}>
                <Typography component="p">Your cart is empty.</Typography>
              </If>
              <If condition={calculateTotal() !== '0.00'}>
                <Typography component="p">Total: ${calculateTotal()}</Typography>
                <Button variant="outlined" onClick={() => setCheckout('shipping')}>Checkout</Button>
              </If>
            </Card>
          </Paper>
        </If>
        <div className={classes.checkout}>
        <If condition={checkout === 'shipping'}>
          <Paper>
            <Typography variant="h6" gutterBottom>
        Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" onChange={(e) => {
                    setSameAsShipping(!sameAsShipping);}}/>}
                  label="Same as billing address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={() => setCheckout('')}>Back</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={(e) => {e.preventDefault();
                  if(sameAsShipping === true){
                    setCheckout('payment');
                  }else {
                    setCheckout('billing');}}}>Next</Button>
              </Grid>
            </Grid>
          </Paper>
        </If>
        <If condition={checkout === 'billing'}>
          <Paper>
            <Typography variant="h6" gutterBottom>
        Billing address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="billing address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="billing address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="billing address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="billing postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="billing country"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={() => setCheckout('shipping')}>Back</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={(e) => {e.preventDefault();
                  setCheckout('payment');}}>Next</Button>
              </Grid>
            </Grid>
          </Paper>  
        </If>
        <If condition={checkout === 'payment'}>
          <Paper>
            <Typography variant="h6" gutterBottom>
        Payment method
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cardNumber"
                  label="Card number"
                  fullWidth
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cvv"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={(e) => {e.preventDefault();
                  if(sameAsShipping === true){
                    setCheckout('shipping');
                    setSameAsShipping(false);
                  }else {
                    setCheckout('billing');}}}>Back</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={(e) => {
                  e.preventDefault();
                  setCheckout('purchase');
                  props.clearCart();
                }}>Purchase</Button>
              </Grid>
            </Grid>
          </Paper>
        </If>
        <If condition={checkout === 'purchase'}>
          <Paper>
            <Typography variant="h6" gutterBottom>
        Thanks for your order!
            </Typography>
            <Typography component="p" gutterBottom>
        Your order number is {generateOrderNumber()}.
            </Typography>
          </Paper>
        </If>
      </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    products: state.products,
    cart: state.cart,
  };
};

const dispatchStateToProps = { clearCart };

export default connect(
  mapStateToProps,
  dispatchStateToProps,
)(ShoppingCart);
