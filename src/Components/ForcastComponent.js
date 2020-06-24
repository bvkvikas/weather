import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ForcastCards from './Cards/ForcastCards';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: 'rgba(119, 119, 119,0.05)',
    maxHeight: '100px',
    overflow: 'auto',
    color: 'white'
  },
  inline: {
    display: 'inline'
  },
  list: {
    backgroundColor: 'rgba(119, 119, 119,0.05)'
  },
  paper: {
    height: '91vh',
    overflow: 'auto'
  }
});

const ForcastComponent = data => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {data.data.map(row => (
          <ForcastCards data={row} key={row.datetime} />
        ))}
      </List>
    </Paper>
  );
};
export default ForcastComponent;
