import React, { Component } from 'react';
import axios from 'axios';
import {
  Toolbar,
  Typography,
  TextField,
  Button,
  Grid,
  AppBar
} from '@material-ui/core';
import Cards from './Cards/Cards';
import cx from 'classnames';
import styles from './Dashboard.module.css';
import { makeStyles } from '@material-ui/core/styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      city: 'New York',
      country: 'US',
      errors: {
        city: '',
        country: ''
      }
    };
  }
  async componentDidMount() {
    this.getData();
  }
  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async getData() {
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${this.state.city}&country=${this.state.country}&key=2a69527e290c423db3f2d9e0ce84428c`
    );
    console.log(response.data.data[0]);
    this.setState({ data: response.data.data[0] });
  }

  onButtonClick = event => {
    event.preventDefault();
    if (this.state.city.length >= 3 && this.state.country.length === 2) {
      this.getData();
    } else {
      if (this.state.city.length < 3) {
        alert('Enter valid city ');
      } else if (this.state.country.length !== 2) {
        alert('Enter valid country in 2 letter format ');
      }
    }
  };

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
            <form className='City' onSubmit={this.onButtonClick}>
              <input
                type='text'
                name='city'
                placeholder='City'
                value={this.state.city}
                onChange={this.handleFormChange}
              />
              <input
                type='text'
                placeholder='2 letter country code'
                value={this.state.country}
                onChange={this.handleFormChange}
                name='country'
              />
              <input type='submit' value='Submit' />
            </form>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Dashboard;
