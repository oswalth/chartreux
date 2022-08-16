import React from 'react';
import {Box, IconButton, InputBase, MenuItem, Paper, SxProps, TextField, Theme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import {theme} from '../../../theme';

export interface LookupType{
  value: string
  label: string
}

interface SearchBarProps {
  searchValue: string
  handleSearchValueChange: (value: string) => void
  lookups: LookupType[]
  selectedLookup: string
  handleLookupChange: (lookup: string) => void
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '40%',
    height: '7vh',
    margin: '10px auto'
  },
  searchField: {
    flex: 3,
  },
  lookupField: {
    flex: 2,
    border: 'none',
  }
}

const SearchBar = (
  {
    searchValue,
    handleSearchValueChange,
    lookups,
    selectedLookup,
    handleLookupChange
  }: SearchBarProps
) => {
  const onLookupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleLookupChange(event.target.value)
  }

  const onSearchValueChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleSearchValueChange(event.target.value)
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Paper
        sx={styles.container}
      >
        <InputBase
          sx={styles.searchField}
          placeholder="Search..."
          onChange={onSearchValueChange}
          value={searchValue}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper sx={styles.container}>
        <TextField
          select
          value={selectedLookup}
          onChange={onLookupChange}
          variant="standard"
          sx={styles.lookupField}
        >
          {lookups.map((lookup) => (
            <MenuItem key={lookup.value} value={lookup.value}>
              {lookup.label}
            </MenuItem>
          ))}
        </TextField>
      </Paper>

    </Box>
  )
}

export default SearchBar;
