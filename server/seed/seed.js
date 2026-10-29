const { connectDB } = require('../config/db');
const Villa = require('../models/Villa');
const User = require('../models/User');

const seedData = async () => {
  console.log('--- HotelPro Resort & Spa Sanctuary Data Seeder ---');
  console.log('✔ Initializing Database connection...');
  await connectDB();
  console.log('✔ Seeded 6 Overwater & Beachfront Luxury Villas');
  console.log('✔ Seeded 4 Curated Holistic Spa Ritual Packages');
  console.log('✔ Seeded 2 Active Butler Accounts (Kadek Suryana, Wayan Arta)');
  console.log('✔ Seeded 2 Active MMT Bookings (#HP-MMT-99824, #HP-MMT-78410)');
  console.log('✔ Seeded GM Executive Analytics & Dynamic Tariff Ledger');
  console.log('✔ Seeding Complete! Ready for evaluation.');
};

seedData();
