import React, {useEffect, useState} from 'react'
import {
    Typography,
    Button
} from "@material-ui/core"
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
        <div>
            {
                jobs && jobs.map((job)=>(
                <div key={job.id} className="job">
                    <Typography variant="h6">{job.title}</Typography>
                </div>
                )) 
            }  
        </div>
    )
}
