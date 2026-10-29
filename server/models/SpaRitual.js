const mongoose = require('mongoose');

const spaRitualSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  durationMinutes: {
    type: Number,
    default: 60
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Ayurvedic', 'Ocean Therapy', 'Dining Experience'],
    default: 'Ayurvedic'
  }
});

module.exports = mongoose.model('SpaRitual', spaRitualSchema);

