const express = require('express');
const cors = require('cors');
const { connectDB, getDBStatus } = require('./config/db');

const villaRoutes = require('./routes/villaRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const butlerRoutes = require('./routes/butlerRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize MongoDB Connection (with graceful fallback)
connectDB();

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    edition: 'HotelPro - Luxury Eco-Resort & Spa Sanctuary',
    databaseConnected: getDBStatus(),
    timestamp: new Date()
  });
});

// Mount Routes
app.use('/api/villas', villaRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/butler', butlerRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`HotelPro Resort Server running on port ${PORT}`);
});

module.exports = app;
