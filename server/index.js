import express  from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import router from './src/routes/index.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/', router);
app.get('/', (req,res) =>{
    res.send('API is Runn....')
})

const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`server runingin on port ${PORT}`))
