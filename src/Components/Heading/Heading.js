import React from 'react';
import { Typography } from '@material-ui/core';
import cx from 'classnames';
import styles from './Headding.module.css';

const Heading = props => {
  const { title } = props;
  return (
    <div className={styles.main}>
      <Typography className={cx(styles.font)} variant='h5' gutterBottom>
        {`16 day forcast for ${title}`}
      </Typography>
    </div>
  );
};

export default Heading;
