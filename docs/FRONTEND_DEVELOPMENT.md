# Frontend Architecture & User Interface Design

This document details the frontend client architecture, UI design system, and interactive engineering for **HotelPro - Luxury Eco-Resort & Spa Sanctuary**.

---

## 🎨 1. Frontend Structure & Architecture

### File Organization
```
client/
├── index.html                   # Main luxury resort explorer and villa catalog
├── HOTEL_BOOKING_MAKEMYTRIP.html  # Dedicated MakeMyTrip style reservation desk
├── MY_BOOKINGS_PAGE.html        # Verified bookings desk with instant refund cancellation & GST tax invoice
└── LOGIN_PAGE.html              # Multi-role login portal with 1-click evaluator buttons
```

### Design System & Aesthetic Foundations
* **Aesthetic**: Deep Emerald Greens (`#051a14`, `#0a2e23`), Warm Champagne Gold (`#cba158`, `#dfbc77`), Sand Cream (`#faf7f2`), and Serene Glassmorphism.
* **Typography**: Editorial Serif (`Playfair Display`) paired with contemporary sans-serif (`Plus Jakarta Sans`).
* **Icons**: Font Awesome 6 and Lucide vector icons.
* **Layout**: CSS Grid and Flexbox responsive layouts tailored for 4K desktop, laptop, tablet, and mobile displays.

---

## 💻 2. Interactive Component Engineering

### Core Modules Implemented
1. **360° Sanctuary Villa Perspective Switcher**:
   * Interactive modal allowing guests to toggle between Private Sun Deck, Infinity Plunge Pool, Open-Air Stone Tub, and Glass-Floor Lagoon Bedroom.
2. **Ayurvedic Spa & Island Experience Builder**:
   * Real-time price calculator adding floating champagne breakfasts, Balinese massages, and private catamaran cruises dynamically to the stay total.
3. **Certified Eco-Passport & Carbon Tracker**:
   * Computes real-time carbon offsets (kg CO2 offset and Baa Atoll mangroves planted per night reserved).
4. **24/7 Island Butler Dispatch Console**:
   * Allows guests to summon buggies, aromatherapy pillows, and coconut platters with live status updates.
5. **Integrated Web Audio Ocean Wave Synthesizer**:
   * Generates soothing ambient ocean sounds using the browser's native Web Audio API with zero external media files.
6. **Dedicated Reservation Checkout**:
   * 5-Photo mosaic gallery, MMT Assured badge, sticky booking card with `HOTELPRO20` coupon, and UPI/Card simulation.
7. **My Bookings & Cancellation Engine**:
   * 1-Click cancellation with 100% full refund guarantee and printable GST tax invoice (HSN 996311).
