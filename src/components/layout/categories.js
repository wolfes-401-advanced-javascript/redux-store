import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeCategory, fetchCategories } from '../store/categories.js';

const useStyles = makeStyles((theme) => ({

  categoriesRoot: {
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

const Categories = (props) => {
  useEffect(() => {
    props.fetchCategories();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.categoriesRoot}>
      <Paper variant="outlined">
        <Typography className={classes.heading} variant="h4">Choose a category</Typography>
        <List className={classes.list}>
          {props.categories.categories.map((category, idx) => (
            <ListItem className={classes.listItem} key={idx} onClick={() => props.changeCategory(category)}><Button variant="outlined">{category.displayName}</Button></ListItem>
          ))}
        </List>
        <div className={classes.details}>
          <Typography variant="h5" component="h5"> {props.categories.activeCategory.displayName || 'No category selected'}</Typography>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    categories: state.categories,
    activeCategory: state.categories.activeCategory,
  };
};

const mapDispatchToProps = { changeCategory, fetchCategories };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);