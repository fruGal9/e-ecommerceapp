import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button'

const SearchBar = () => {(
  <div className={styles.SearchBar}>
    SearchBar Component
  </div>
  
);

return (
  <div className='Search'>
      <TextField  id="outlined-search" label="Search field" type="search" />
      <Button sx={{paddingBottom:3,borderColor:'gray', color:'gray'}}  id='button' variant="outlined">Search</Button>


    
  </div>
)




}

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;

