const mongoose = require('mongoose');

const villaSchema = new mongoose.Schema({
  villaCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['overwater', 'beach', 'spa', 'presidential'],
    required: true
  },
  categoryLabel: {
    type: String,
    default: 'Overwater Ocean Sanctuary'
  },
  pricePerNight: {
    type: Number,
    required: true
  },
  maxGuests: {
    type: Number,
    default: 2
  },
  sizeSqFt: {
    type: Number,
    default: 1850
  },
  amenities: [{
    type: String
  }],
  perspectives360: {
    sundeck: String,
    plungePool: String,
    stoneTub: String,
    lagoonBedroom: String
  },
  status: {
    type: String,
    enum: ['Prepared & Available', 'Occupied', 'Turn-down in Progress', 'Deep Cleansed'],
    default: 'Prepared & Available'
  },
  ecoRating: {
    solarPoweredPct: { type: Number, default: 100 },
    treesPlantedPerStay: { type: Number, default: 10 },
    co2OffsetKg: { type: Number, default: 420 }
  },
  images: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Villa', villaSchema);

