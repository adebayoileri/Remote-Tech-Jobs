// import { response } from 'express';

const fetch = require('node-fetch')
const redis =  require('redis')

let client
if(process.env.NODE_ENV === 'production'){
 client = redis.createClient(
    process.env.REDIS_PORT,
    process.env.REDIS_HOST
  );
  client.auth('br1Glbw8SqfDh4PgP9G0PlklNMUz4gO9');
}else{
 client = redis.createClient();
}
const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client)

client.on('connect', function() {
  console.log('Connected to Redis');
});
client.on("error", function(error) {
  console.error(error);
});


const JOBS_URL =  "https://remotive.io/api/remote-jobs";
async function getRemoteJobs(){
   const res  = await fetch(`${JOBS_URL}`);
   const jobs = await res.json();
//    console.log(jobs.jobs.length)
  const allJobs =  jobs.jobs;
  const remoteJobs = allJobs.filter(job =>{
      const jobLocation = job.candidate_required_location.toLowerCase();
    //   console.log(jobLocation)
      if(jobLocation.includes('anywhere') || jobLocation.includes('remote')){
          return true
      }
      return false
  })
//   console.log('found', remoteJobs.length, "jobs");
  const storedJobs =  await setAsync('remotejobs', JSON.stringify(remoteJobs))
  console.log(storedJobs)
}
getRemoteJobs()

module.exports =  getRemoteJobs;