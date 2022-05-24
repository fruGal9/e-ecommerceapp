import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
const Header = () => {(
  <div className={styles.Header}>
    Header Component
  </div>
  
)
return (
  <div>
    <SearchBar ></SearchBar>
    <Menu></Menu>
    

    
    </div>
)

};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
