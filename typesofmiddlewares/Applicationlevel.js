const express=require('express')
const app=express()
const port=8001

//application level middleware
//It is applicable for all routes in a application.
app.use((req,res,next)=>{
    console.log('Application level middleware')
    next()    
})
app.get('/',(req,res)=>{
    res.send('Welcome to home page')
})
app.use((req,res,next)=>{
    console.log('Middleware after home page')
    next()    
})
app.get('/about',(req,res)=>{
    res.send('About us page')
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})