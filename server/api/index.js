// import { response } from 'express';

const fetch = require('node-fetch')

const JOBS_URL =  "https://remotive.io/api/remote-jobs";
async function getRemoteJobs(){
   const res  = await fetch(`${JOBS_URL}`)
   const jobs = res.json();
   console.log(jobs)
}
getRemoteJobs()