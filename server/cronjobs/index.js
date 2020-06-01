var CronJob = require('cron').CronJob;

const remoteJobs = require('../api/index');

// Refetch on sundays
var job = new CronJob('0 0 * * 0', remoteJobs , null, true, 'America/Los_Angeles');
job.start();