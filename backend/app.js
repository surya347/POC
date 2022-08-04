const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080 ;


//home page server
app.get('/', (req,res)=>{
res.send('hello home server')
});


app.get('/products', (req,res)=>{
    res.send('hello product server')
 });

 app.get('/orders', (req,res)=>{
    res.send('hello orders server')
 });



app.listen(PORT,()=>{
    console.log('server is running at port no. 8080')
})