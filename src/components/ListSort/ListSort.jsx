import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ListSort({ sortBy, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sort-native">Sort By</InputLabel>
        <Select
          native
          value={sortBy}
          onChange={handleChange}
          inputProps={{
            name: 'sort',
            id: 'sort-native',
          }}
        >
          <option value="" />
          <option value={'popularity.desc'}>Most Popular</option>
          <option value={'popularity.asc'}>Less Popular</option>
          <option value={'release_date.desc'}>Newer</option>
          <option value={'release_date.asc'}>Older</option>
        </Select>
      </FormControl>
    </div>
  );
}
