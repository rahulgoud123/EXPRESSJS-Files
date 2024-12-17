//All http requests
const express=require('express')
const app=express()
const port=5000

app.get('/users',(req,res)=>{
    res.send('Home Page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

//post
app.post('/users',(req,res)=>{
    res.send('Posting data on users page')
})

//put-update
app.put('/users/:id',(req,res)=>{
    const usersId=req.params.id
    res.send(`Updating user with ${usersId}`)
})

//delete
app.delete('/users/:id',(req,res)=>{
    const userId=req.params.id
    res.send(`Deleting user record ${userId}`)
})

//getby id
app.get('/users/:id',(req,res)=>{
    console.log(`Reading specific record ${userId}`)
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})