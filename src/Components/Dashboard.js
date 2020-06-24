import React, { Component } from 'react';
import axios from 'axios';
import { Toolbar, Typography, Button, Grid, AppBar } from '@material-ui/core';
import Cards from './Cards/Cards';
import cx from 'classnames';
import styles from './Dashboard.module.css';
import { makeStyles } from '@material-ui/core/styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  async componentDidMount() {
    const response = await axios.get(
      'https://api.weatherbit.io/v2.0/current?city=Boston&country=US&key=2a69527e290c423db3f2d9e0ce84428c'
    );
    console.log(response.data.data[0]);
    this.setState({ data: response.data.data[0] });
  }
  render() {
    return (
      <div>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='h5' noWrap>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.main}>
          <Grid container spacing={2} justify='center'>
            <Grid item xs={12} sm={10}>
              <div className={styles.container}>
                <div className={styles.countryPicker}>
                  <Cards data={this.state.data} />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Dashboard;
