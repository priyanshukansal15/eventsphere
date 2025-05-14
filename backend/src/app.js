// app.js
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRouter from './routers/admin-router.js';
import userRouter from './routers/user-router.js';

// Load environment variables
dotenv.config();

const app = express();

// Configuration
const PORT = process.env.PORT || 4444;
const DB_NAME = process.env.DB_NAME || 'test';
const DB_URL = process.env.DB_URL || `mongodb://127.0.0.1:27017/${DB_NAME}`;

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/admin', adminRouter);
app.use('/api', userRouter);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Event Management API!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        msg: "Internal Server Error",
        error: err.message
    });
});

// Database Connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server is running on port ${PORT}`);
        console.log(`✅ Connected to MongoDB database: ${DB_NAME}`);
    });
})
.catch((err) => {
    console.error('❌ Database connection error:', err);
});
