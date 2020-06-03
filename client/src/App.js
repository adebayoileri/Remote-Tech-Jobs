import React from 'react';
import './App.css';
import Jobs from "./components/Jobs";
import {
  Typography
} from "@material-ui/core";

function App() {
  return (
<>
<div className="section-1">
  <div className="section-1-content">
    <h1>Remote Developer Jobs</h1>
    <Typography className="remote-text" variant="h4" component="h1"> Find your next 💯 remote tech job</Typography>
  </div>
</div>
    <Jobs />
  </>
  );
}

export default App;
