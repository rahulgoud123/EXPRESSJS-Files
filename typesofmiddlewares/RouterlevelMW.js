const express=require('express')
const app=express()
const port=5001
const router=express.Router()

//It applies only to routes defined within a specific router.
router.use((req,res,next)=>{
    console.log('Time',Date.now())
    next()
})

router.get('/home',(req,res)=>{
    res.send('Home page')
})
router.get('/about',(req,res)=>{
    res.send('About us page')
})
app.use('/page',router)

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})