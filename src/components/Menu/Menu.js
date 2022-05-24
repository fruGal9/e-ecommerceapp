import React from 'react';
import PropTypes from 'prop-types';
import LoginIcon from '@mui/icons-material/Login';
import styles from './Menu.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';

const Menu = () =>{ 
  (
  <div className={styles.Menu}>
    Menu Component
  </div>
);
    return(
      <div>
      <LoginIcon color='primary' fontSize='large'></LoginIcon>
      <FavoriteIcon  color='primary' fontSize='large' ></FavoriteIcon>
      <HelpIcon color='primary' fontSize='large'></HelpIcon>
      </div>
    )
    

}

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
