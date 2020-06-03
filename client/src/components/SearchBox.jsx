import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

function SearchBox() {
    return (
        <div style={{color: "red", alignSelf: "center"}}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
        </div>
    )
}
export default SearchBox;
