const express=require('express')
const app=express()
const port=5000
const path=require('path')

app.set('view engine','ejs')

//set dir path
app.set('views',path.join(__dirname,'views'))

//adding static folder
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('Home',{home:'Home page',parahome:'Welcome to home page'})
})
app.get('/about',(req,res)=>{
    res.render('About',{about:'About page',aboutpara:'Welcome to about us page'})
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})