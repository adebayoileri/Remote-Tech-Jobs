const express =  require('express')
const app = express()
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");

const getAsync = promisify(client.get).bind(client);

// app.use('/',(req, res)=>{
//     return res.status(200).json({
//         "message" : "express dey work"
//     })
// })


app.get('/jobs/remote',async (req, res, next) => {

const jobs = await getAsync('remotejobs');
res.status(200).send(jobs)
})

const PORT = process.env.PORT || 3200; 

app.listen(PORT,()=>{
    console.log(`Server up and running on PORT ${PORT}`)
})

module.exports = app;