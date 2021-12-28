import path from 'path';
import express  from 'express';
import dotenv  from 'dotenv';
import connectDB from './src/config/db.js';

import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req,res) =>{
    res.send('API is Runn....')
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server runingin ${process.env.NODE_ENV } mode on port ${PORT}`.yellow.bold))
