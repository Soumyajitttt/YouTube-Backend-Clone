import e from 'express';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use('/user',userRouter)

export default app;