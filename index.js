const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
   res.sendFile(__dirname + "/index.html")   
})
app.post('/', (req, res)=>{
    let formData = req.body;
    console.log(formData);
    res.send('Form submission successful');
 })


app.listen(port,()=>{
    console.log('Server is running');
})