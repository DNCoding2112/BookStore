import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoutes.js';

const app=express();

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('MERN Stack');
});

app.use('/books', bookRoute);

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port : ${process.env.PORT}`)
    });    
})
.catch((err)=>{
    console.log(err);
});
