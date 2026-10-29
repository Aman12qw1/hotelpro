const mongoose = require('mongoose');

const butlerRequestSchema = new mongoose.Schema({
  requestId: {
    type: String,
    required: true,
    unique: true
  },
  villaCode: {
    type: String,
    required: true
  },
  guestName: {
    type: String,
    default: 'Aman (Guest)'
  },
  requestName: {
    type: String,
    required: true,
    enum: ['Island Buggy Dispatch', 'Turndown Rose Bath', 'Aromatherapy Pillow Menu', 'Chilled Coconut Platter', 'Snorkeling Gear Delivery']
  },
  assignedButler: {
    type: String,
    default: 'Kadek Suryana'
  },
  status: {
    type: String,
    enum: ['Dispatched', 'En Route', 'Delivered', 'Completed'],
    default: 'Dispatched'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ButlerRequest', butlerRequestSchema);

