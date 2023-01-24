const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

//setup express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://Rohan:Radhika02@nodetuts.mjjy3kv.mongodb.net/NodeTuts?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true});
//register view engine
app.set('view engine','ejs')

//listen for request
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//mongoose and mongodb sandbox routes
// app.get('/add-blog',(req, res)=>{
//     const blog = new Blog({
//         title:"new blog 2",
//         snippet:"about my new blog",
//         body:"more about my new blog"
//     });
//     blog.save().then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     });
// });

// app.get('/all-blogs',(req, res)=>{
//     Blog.find().then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/single-blog',(req, res)=>{
//     Blog.findById("63ceb90c6877fe8e0ddd03f0").then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });


app.get('/',(req, res)=>{
    // const blogs = [
    //     {title: "Yoshi finds eggs", snippet : "Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    //     {title: "Mario find stars", snippet : "Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    //     {title: "How to defeat browser", snippet : "Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    // ];
    // res.render('index',{title : 'Home', blogs})
    res.redirect('/blogs');
});

app.get('/about',(req, res)=>{
    // res.send('<p>About Page..</p>')
    res.render('about',{title : 'About'})
});

//blog routes
app.use('/blogs',blogRoutes);


//default error 404
app.use((req, res)=>{
    res.status(404).render('404',{title : '404'})
})
