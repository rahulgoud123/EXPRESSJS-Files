//building get req
const express=require('express')
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})
app.get('/about/info',(req,res)=>{
    res.send('Welcome to About Us Page')
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})