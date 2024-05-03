import express from 'express';
import mongoose from 'mongoose';
import router from './route/user.route.js';
 const app = express();
app.use(express.json());
app.use('/api/user', router);
const port = 3000;
 mongoose.connect('mongodb://localhost:27017/Authentication')
.then(() =>{
    console.log('Connected to database');
 app.listen(port, () => 
    console.log(`Server is running on port ${port}`
    ))
 })