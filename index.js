
const express=require('express');
const app=express();
const myLogger = require('./middlewares/logger');
const usersRouter=require('./api/users/users.js');
const cors=require('cors');
const port=5000;

app.use(myLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.use("/", usersRouter);

app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})