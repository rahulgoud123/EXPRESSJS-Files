const express=require('express')
const app=express()
const path=require('path')


app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

const users=[
    {username:'user1', password:'password1'},
    {username:'user2', password:'password2'}
]

app.get('/',(req,res)=>{
    res.render('Index',{title:'Home'})
})

app.get('/login',(req,res)=>{
    res.render('Login',{title:'Login'})
})

app.post('/login',(req,res)=>{
    const {username, password}= req.body
    const user=users.find(u => u.username === username && u.password === password)
    if(user){
        res.redirect('/profile')
    }else{
        res.redirect('/login')
    }
})
app.get('/profile',(req,res)=>{
    res.render('profile',{title: 'Profile', username: req.query.username})
})

const port=3000
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
