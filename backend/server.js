//import the dotenv dep to load variables
import dotenv from 'dotenv';
dotenv
//import express
import express from  'express';

//get the express app instance
const app = express();

//ths is test code
//create a get request handler for the root route 

app.get('/', (req, res)=>{
    res.send('Hello from the backend server');
});

app.get('/users', (req, res)=>{
    res.json([
        { id:1, name:'John Kofi'},
        { id:2, name: 'John Kwame'}
    ]);
});

const PORT = process.env.PORT || 9000;

 
//start the server
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
});