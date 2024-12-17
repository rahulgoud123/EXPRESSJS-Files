const express=require('express')
const app=express()
const port=2000

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})