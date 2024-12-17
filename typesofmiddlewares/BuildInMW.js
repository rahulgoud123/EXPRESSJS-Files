const express=require('express')
const app=express()
const port=3000

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`
        <form action='/submit' method='post'>
    <label>Name:</label>
    <input type='text' id='name' name='name'>
    <label>Password:</label>
    <input type='password' id='password' name='password'>
    <button type='submit'>Submit</button>
    </form>
    `)
})

app.post('/submit',(req,res)=>{
    const formData=req.body
    console.log('Form data received:',formData)
    res.send('Form submitted successfully')
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})