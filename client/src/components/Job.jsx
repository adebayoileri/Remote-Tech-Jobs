import React, {useEffect, useState} from 'react';
import { useHistory as history } from 'react-router-dom';
import Moment from 'react-moment';
import {
    Typography,
    Button
} from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { apiBase } from '../util';
import '../App.css';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});


async function getRemoteJobs(callBack){
    const res = await fetch(`${apiBase}jobs/remote`);
    const data = await res.json()
    // console.log({data})
    callBack(data);
}

export default function Job() {
    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles();
    const theme = useTheme();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [jobs, updateJobs] = useState([])
    useEffect(()=>{
        getRemoteJobs(updateJobs)
    },[])
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs/21);
    const jobsOnCurrentPage = jobs.slice(activeStep * 21, activeStep * 21 + 21);
    return (
        <>
            <div style={{ textAlign:"center", marginTop:"1em" }}>
            <Typography variant="h4" component="h1">Latest jobs: {jobs.length} found</Typography>
            </div>
            <div className="jobs">
            {
                jobsOnCurrentPage && jobsOnCurrentPage.map((job)=>(
                <div key={job.id} className="job">
                  <Typography variant="h6"> <WorkOutlineIcon />  {job.title}</Typography>
                  <Typography><BusinessIcon/> {job.company_name}</Typography>
                  { job.salary ? 
                    <Typography ><MonetizationOnIcon/>{ job.salary} </Typography> : " "
                  }
                    <Typography ><LocationOnIcon/> {job.candidate_required_location}</Typography>
                    <Typography>Posted: <Moment fromNow>{job.publication_date}</Moment></Typography>
                    <div className="action-button"> 
                    <Button onClick={() => (
                      window.location.href = job.url
                    )} style={{backgroundColor:"rgb(243, 37, 37)", color: "#ffff", margin: "8px"}} >Apply</Button>
                    <Button style={{backgroundColor:"dodgerblue", color: "#ffff", margin: "8px"}} >Save</Button>
                    </div>
                </div>
                )) 
            } 
            </div>
<div className="paginate">
            <Typography>Page {activeStep + 1 } of {numPages}</Typography>
    <MobileStepper
      variant="dots"
      steps={numPages}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
</div>
           </>  
    )
}
