import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import store from './store/store-index.js';
import Change from './components/categories.js';
import Update from './components/layout/products.js';

import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';


import './index.scss';
import { lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => {
  return {
    list: {
      backgroundColor: theme.palette.primary.main,
    },
    listItem: {
      color: lightBlue,
    }
  }
})

const App = () => {
  return (
    <Provider store={ store }>

      <Paper>
        <div>
          <Header></Header>
          <Change />
          <Update />
        </div>
                    
      </Paper>
          <Box>
        <Footer></Footer>
          </Box>
    </Provider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
