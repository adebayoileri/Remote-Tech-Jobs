import React from 'react';
import './App.css';
import Jobs from "./components/Jobs";
import SearchBox from './components/SearchBox';
import {
  Typography,
} from "@material-ui/core";


function App() {
  return (
<>
<div className="section-1">
  <div className="section-1-content">
    <h1>Remote Developer Jobs</h1>
    <Typography className="remote-text" variant="h4" component="h1"> Find your next<span aria-label role="img">💯</span> remote tech job</Typography>
  </div>
</div>
    {/* <SearchBox /> */}
    <Jobs />
  </>
  );
}

export default App;
