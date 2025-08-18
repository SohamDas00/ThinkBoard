import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import notesRouter from './routes/notesRoutes.js'
import { connect } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

//config .env
dotenv.config();

const app=express();
//middleware
app.use(express.json())

app.use(cors());

app.use((req,res,next)=>{
    console.log(`Request method is ${req.method} and request url is ${req.url}`);
    next();
})

app.use(rateLimiter)
app.use('/api/notes',notesRouter)

//port
const PORT=process.env.PORT||5000;
connect().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`);
})
});
