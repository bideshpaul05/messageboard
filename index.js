const express =  require('express')
const app = express()
app.use(express.urlencoded({extended:false}))
const messages = [{
    User:"Bidesh",
    description:"First comment",
    createdAt: new Date()
}]




app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index',{messages:messages})
})

app.get('/new',(req,res)=>{
    res.render('new')
})
app.post('/new',(req,res)=>{
    messages.push({User: req.body.User, description: req.body.description, createdAt: new Date()});
    res.redirect('/')
})
app.listen(5000,()=>{
    console.log('server is running')
})