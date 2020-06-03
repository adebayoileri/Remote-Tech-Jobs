const express =  require('express')
const app = express()
const redis = require("redis");
const client = redis.createClient();
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