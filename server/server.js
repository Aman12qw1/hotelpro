const express = require('express');
const cors = require('cors');
const path = require('path');
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

// Mount REST API Routes
app.use('/api/villas', villaRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/butler', butlerRoutes);
app.use('/api/auth', authRoutes);

// Serve Frontend Static Files from root & client directory
const projectRoot = path.join(__dirname, '..');
app.use(express.static(projectRoot));
app.use('/client', express.static(path.join(projectRoot, 'client')));

// Serve main resort catalog at root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(projectRoot, 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🏨 HotelPro Luxury Eco-Resort Platform ONLINE`);
  console.log(`📍 Web Client:   http://localhost:${PORT}`);
  console.log(`📍 Checkout Desk: http://localhost:${PORT}/HOTEL_BOOKING_MAKEMYTRIP.html`);
  console.log(`📍 My Bookings:  http://localhost:${PORT}/MY_BOOKINGS_PAGE.html`);
  console.log(`📍 Login Portal: http://localhost:${PORT}/LOGIN_PAGE.html`);
  console.log(`📍 API Health:   http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});

module.exports = app;
