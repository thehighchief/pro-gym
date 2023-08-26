import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workoutRoutes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use(( req, res, next ) => {
    console.log(req.path, req.method)
    next()
})

// route
app.use('/api/workouts', workoutRoutes)


// database connection

mongoose.connect(process.env.MONGO_URL)
.then(() => {

    app.listen(process.env.PORT, ()=> {
        console.log('connected and running on port', process.env.PORT)
    })

}).catch((error) =>{

    console.log(`Error:${error.message}`)

})

