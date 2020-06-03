// import { response } from 'express';

const fetch = require('node-fetch')
// const redis = require("redis");
// if(process.env.REDIS_URL){
    // var client = require("redis").createClient();
  // }else{
  // var client = redis.createClient();
  // }
  var client = require("redis").createClient({
    port: 17259,  
    host:'redis-17259.c114.us-east-1-4.ec2.cloud.redislabs.com',
    password:'br1Glbw8SqfDh4PgP9G0PlklNMUz4gO9',
  });
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);

// getAsync.then(console.log).catch(console.error);
const setAsync = promisify(client.set).bind(client);

// client.on("error", function(error) {
//   console.error(error);
// });

// client.set("key", "value", redis.print);
// client.get("key", redis.print);

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