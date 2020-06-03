import React, {useEffect, useState} from 'react';
import Moment from 'react-moment';
import {
    Typography,
    Button
} from "@material-ui/core";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import '../App.css';


async function getRemoteJobs(callBack){
    const res = await fetch('http://localhost:3200/jobs/remote');
    const data = await res.json()
    // console.log({data})
    callBack(data);
}


export default function Job() {
    const [jobs, updateJobs] = useState([])
    useEffect(()=>{
        getRemoteJobs(updateJobs)
    },[])
    return (
        <>
            <div style={{ textAlign:"center", marginTop:"1em" }}>
            <Typography variant="h4" component="h1">Latest jobs: {jobs.length} found</Typography>
            </div>
            <div className="jobs">
            {
                jobs && jobs.map((job)=>(
                <div key={job.id} className="job">
                  <Typography variant="h6"> <WorkOutlineIcon />  {job.title}</Typography>
                  <Typography><BusinessIcon/> {job.company_name}</Typography>
                  { job.salary ? 
                    <Typography ><MonetizationOnIcon/>{ job.salary} </Typography> : " "
                  }
                    <Typography ><LocationOnIcon/> {job.candidate_required_location}</Typography>
                    <Typography>Posted: <Moment fromNow>{job.publication_date}</Moment></Typography>
                    <div className="action-button"> 
                    <Button style={{backgroundColor:"rgb(243, 37, 37)"}} >Apply</Button>
                    <Button style={{backgroundColor:"dodgerblue"}} >Save</Button>
                    </div>
                </div>
                )) 
            } 
            </div>
           </>  
    )
}
