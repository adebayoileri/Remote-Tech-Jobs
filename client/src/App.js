import React from 'react';
import './App.css';
import Jobs from "./components/Jobs"

function App() {
  return (
<>
<div className="section-1">
  <div className="section-1-content">
    <h1>Remote Developer Jobs</h1>
  </div>
</div>
    {/* <h1>Dev jobs</h1> */}
    <Jobs />
  </>
  );
}

export default App;
