import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import store from './store/store-index.js';
import Change from './components/categories.js';

import Header from './components/header.js';
import Footer from './components/footer.js';


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
        </div>
          <Box component="form" m={5}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Password" variant="outlined" />
          </Box>
          <Box>

          </Box>

          <Box>
        <Footer></Footer>
          </Box>
      </Paper>
    </Provider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
