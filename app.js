const express =  require('express')

const app = express()

// app.use('/',(req, res)=>{
//     return res.status(200).json({
//         "message" : "express dey work"
//     })
// })

const PORT = process.env.PORT || 3200; 

app.listen(PORT,()=>{
    console.log(`Server up and running on PORT ${PORT}`)
})

module.exports = app;