import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import destinationRoutes from './routes/destinationRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware to handle CORS and JSON payloads
app.use(cors());
app.use(express.json());

// Root route to check if backend is running
app.get('/', (req, res) => {
    res.send('TourMithuru Backend is Running');
});

// Mount the destination routes
app.use('/api/destinations', destinationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
