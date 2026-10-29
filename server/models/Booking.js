const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingReference: {
    type: String,
    required: true,
    unique: true
  },
  guestName: {
    type: String,
    required: true
  },
  guestEmail: {
    type: String,
    required: true
  },
  guestPhone: {
    type: String,
    default: '+91 9876543210'
  },
  villaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Villa'
  },
  villaCode: {
    type: String,
    required: true
  },
  villaTitle: {
    type: String,
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  nights: {
    type: Number,
    required: true,
    default: 1
  },
  guestsCount: {
    type: Number,
    default: 2
  },
  selectedSpaRituals: [{
    name: String,
    price: Number
  }],
  baseTariff: {
    type: Number,
    required: true
  },
  spaAddonsTotal: {
    type: Number,
    default: 0
  },
  gstTax: {
    type: Number,
    default: 0
  },
  discountAmount: {
    type: Number,
    default: 0
  },
  couponCode: {
    type: String,
    default: 'HOTELPRO20'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['UPI', 'Credit Card', 'Seaplane Arrival Desk'],
    default: 'UPI'
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Pending', '100% Refunded'],
    default: 'Paid'
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Active Stay', 'Completed', 'Cancelled'],
    default: 'Confirmed'
  },
  cancellationDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);

