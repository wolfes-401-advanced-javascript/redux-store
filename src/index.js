import React from 'react';
import ReactDOM from 'react-dom';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../src/components/header.js';
import Footer from '../src/components/footer.js';


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
    <Paper>
      <div>
        <Header></Header>
      </div>
        <Box component="form" m={5}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Password" variant="outlined" />
        </Box>
        <Box>
      <Footer></Footer>
        </Box>
    </Paper>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
