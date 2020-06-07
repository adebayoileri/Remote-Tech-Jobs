const express =  require('express')
const app = express()
const redis = require("redis");

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
client.on('connect', function() {
  console.log('Connected to Redis');
});
client.on("error", function(error) {
  console.error(error);
});

const { promisify } = require("util");
const cors = require('cors');
const path = require('path')

const getAsync = promisify(client.get).bind(client);

app.use(cors())
app.use(express.static('public'));


// app.get('*',(req, res)=>{
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'
//     ))
// })


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