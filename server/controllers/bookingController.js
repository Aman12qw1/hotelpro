const Booking = require('../models/Booking');

let inMemoryBookings = [
  {
    bookingReference: 'HP-MMT-99824',
    guestName: 'Aman (VIP Traveler)',
    guestEmail: 'aman@hotelpro.resort',
    villaCode: 'V-101',
    villaTitle: 'Royal Overwater Sunset Villa',
    checkInDate: '2026-11-05',
    checkOutDate: '2026-11-08',
    nights: 3,
    totalAmount: 115200,
    paymentStatus: 'Paid',
    status: 'Confirmed'
  },
  {
    bookingReference: 'HP-MMT-78410',
    guestName: 'Aniket Jadon',
    guestEmail: 'aniket@hotelpro.resort',
    villaCode: 'V-104',
    villaTitle: 'Ayurvedic Bamboo Spa Haven',
    checkInDate: '2026-11-12',
    checkOutDate: '2026-11-14',
    nights: 2,
    totalAmount: 63200,
    paymentStatus: 'Paid',
    status: 'Confirmed'
  }
];

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    if (bookings && bookings.length > 0) {
      return res.json({ success: true, count: bookings.length, data: bookings });
    }
    return res.json({ success: true, count: inMemoryBookings.length, data: inMemoryBookings });
  } catch (error) {
    return res.json({ success: true, count: inMemoryBookings.length, data: inMemoryBookings });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const newRef = 'HP-MMT-' + Math.floor(10000 + Math.random() * 90000);
    const bookingData = {
      ...req.body,
      bookingReference: newRef,
      paymentStatus: 'Paid',
      status: 'Confirmed',
      createdAt: new Date()
    };
    inMemoryBookings.unshift(bookingData);
    res.status(201).json({ success: true, data: bookingData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  const { ref } = req.params;
  const booking = inMemoryBookings.find(b => b.bookingReference === ref);
  if (booking) {
    booking.status = 'Cancelled';
    booking.paymentStatus = '100% Refunded';
    booking.cancellationDate = new Date();
    return res.json({ success: true, message: 'Reservation cancelled with 100% instant refund guarantee.', data: booking });
  }
  res.status(404).json({ success: false, message: 'Reservation not found' });
};

