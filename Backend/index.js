import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRouter from './Routes/AuthRoutes'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));      
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 
         

dotenv.config();

mongoose
  .connect(

    process.env.url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => app.listen(5000, () => console.log(`Listeinig @ ${process.env.PORT}`)))
  .catch((err)=>console.log(err));


  app.use('/auth',authRouter);

