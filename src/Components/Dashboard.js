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
      'http://api.weatherstack.com/current?query=Boston&access_key=9ccafcf1f73a0a39c5de6125a4fde904'
    );
    console.log(response.data);
    this.setState({ data: response.data });
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
