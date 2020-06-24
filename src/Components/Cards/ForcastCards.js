import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress
} from '@material-ui/core';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Cards.module.css';

const useStyles = makeStyles({
  heading: {
    fontWeight: 'fontWeightLight',
    color: 'black',
    fontSize: 20
  },
  recovered: {
    backgroundColor: 'rgba(141, 202, 103, 0.05)',
    color: 'rgba(141, 202, 103)'
  }
});

const Cards = props => {
  const {
    data: { temp, weather, max_temp, min_temp, datetime }
  } = props;

  const st = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify='center'>
        <Grid xs={12} md={12} item component={Card} className={styles.card}>
          <CardContent className={cx(st.recovered)}>
            {temp ? (
              <div>
                <Typography variant='h6'>{`Date: ${datetime}`}</Typography>
                <Typography variant='h6'>{`Max temp : ${max_temp}`}</Typography>
                <Typography variant='h6'>{`Min temp : ${min_temp}`}</Typography>

                <Typography color='textSecondary'>
                  {weather.description}
                </Typography>
              </div>
            ) : (
              <CircularProgress />
            )}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
