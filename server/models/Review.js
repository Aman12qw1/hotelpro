const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    default: 'Traveler'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  comment: {
    type: String,
    required: true
  },
  villaStayed: {
    type: String,
    default: 'Royal Overwater Sunset Villa'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);

