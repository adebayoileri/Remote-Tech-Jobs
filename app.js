const express =  require('express')
const app = express()
const redis = require("redis");
// if(process.env.REDIS_URL){
//     try {     
//       var rtg   = require("url").parse(process.env.REDIS_URL);
//       var client = require("redis").createClient(rtg.port, rtg.hostname);
//       client.auth(rtg.auth.split(":")[1])
//     } catch (error) {
//       console.log(error)
//     }
//     }else{
    //     }
        // var client = redis.createClient();
var client = require("redis").createClient({
    port: 17259,  
    host:'redis-17259.c114.us-east-1-4.ec2.cloud.redislabs.com',
    password:'br1Glbw8SqfDh4PgP9G0PlklNMUz4gO9',
  });

const { promisify } = require("util");
const cors = require('cors');
const path = require('path')

const getAsync = promisify(client.get).bind(client);

app.use(cors())
app.use(express.static('public'));


app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'
    ))
})


app.get('/jobs/remote',async (req, res, next) => {
res.header('Access-Control-Allow-Origin', '*')
const jobs = await getAsync('remotejobs');
return res.status(200).send(jobs)
})

const PORT = process.env.PORT || 3200; 

app.listen(PORT,()=>{
    console.log(`Server up and running on PORT ${PORT}`)
})

module.exports = app;