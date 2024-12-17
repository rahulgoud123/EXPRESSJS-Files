const express=require('express')
const app=express()

//middleware to parse json data
app.use(express.json()) //parse the data

app.get('/',(req,res)=>{
    res.status(200).json({msg:'Request is successful'})
})
app.get('/notfound',(req,res)=>{
    res.status(404).json({err:'Page not found'})
})
app.get('/unauthorize',(req,res)=>{
    res.status(401).json({msg:'Unauthorize page'})
})
app.get('/servererr',(req,res)=>{
    res.status(500).json({error:'Internal server error'})
})
app.post('/bad-request',(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(400).json({error:'Name is required'})
    }
    res.status(201).json({message:`Hello, ${name}!`})
})

app.listen(3000,()=>{
    console.log(`Server is running at 3000`)
})