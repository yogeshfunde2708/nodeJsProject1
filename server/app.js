const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
// const { request } = require('http');
// const { response } = require('express');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//creat
app.post('insert', (request, response) =>{

});
//read 
app.get('/getAll',(request,response)=>{
    response.json({
        success : true
    });
})

//update 

//delete


app.listen(process.env.PORT, () =>
    console.log("app is running"));