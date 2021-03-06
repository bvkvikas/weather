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
  totalCases: {
    backgroundColor: 'rgba(255, 7, 58, 0.05)',
    color: 'rgba(255, 7, 58)'
  },
  activeCases: {
    backgroundColor: 'rgba(0, 0, 255, 0.05)',
    color: 'rgba(0, 0, 255)'
  },
  recovered: {
    backgroundColor: 'rgba(141, 202, 103, 0.05)',
    color: 'rgba(141, 202, 103)'
  },
  deceased: {
    backgroundColor: 'rgba(119, 119, 119,0.05)',
    color: 'rgba(119, 119, 119)'
  }
});

const Cards = props => {
  const {
    data: { sunrise, sunset, temp, city_name, weather }
  } = props;

  const st = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify='center'>
        <Grid xs={12} md={12} item component={Card} className={styles.card}>
          <CardContent className={cx(st.activeCases)}>
            {temp ? (
              <div>
                <Typography
                  className={st.heading}
                  variant='h1'
                  component='h1'
                  gutterBottom
                >
                  {city_name}
                </Typography>
                <Typography variant='h5'>
                  {`Current Temperature : ${temp}`}
                </Typography>
                <Typography variant='h6'>{`Sunrise : ${sunrise}`}</Typography>
                <Typography variant='h6'>{`Sunset : ${sunset}`}</Typography>
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
