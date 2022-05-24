import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton'


const SearchBar = () => {
  (
    <div className={styles.SearchBar}>
      SearchBar Component
    </div>

  );

  return (
    <div>
      <TextField 
        
        id="standard-search"
        label=""
        type="search"
        variant="outlined"
        style={{
          width:1400
          }}/>
        
      
      


    </div>
  )




}

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;

