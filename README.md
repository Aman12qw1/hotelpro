# HotelPro - Luxury Eco-Resort & Spa Sanctuary

An enterprise-grade, full-stack hospitality management platform designed specifically for tropical island overwater villas and holistic wellness resorts in the Maldives and Bali.

---

## 🌟 Brand Identity & Experience Design
* **System Title**: **HotelPro** (Luxury Eco-Resort & Spa Sanctuary)
* **Aesthetic**: Deep Emerald Greens (`#051a14`, `#0a2e23`), Warm Champagne Gold (`#cba158`, `#dfbc77`), Sand Cream (`#faf7f2`), and Serene Glassmorphism.
* **Typography**: Editorial Serif (`Playfair Display`) paired with contemporary sans-serif (`Plus Jakarta Sans`).
* **Soundscape**: Integrated Web Audio ocean wave synthesis with real-time audio visualization.

---

## 🚀 Core Features & Innovations
1. **360° Sanctuary Villa Explorer**: Interactive perspective switcher between Private Sun Deck, Infinity Plunge Pool, Open-Air Stone Tub, and Glass-Floor Lagoon Bedroom.
2. **Curated Ayurvedic Spa & Island Experience Builder**: Dynamic calculation for floating champagne breakfasts, Balinese herbal poultice massages, private catamaran reef cruises, and beachfront dining.
3. **Certified Eco-Passport & Carbon Offset Tracker**: Displays real-time guest CO2 offset calculation, Baa Atoll mangroves planted per stay, and 100% plastic-free certification.
4. **24/7 Island Butler Dispatch Console**: Live dispatching for island buggies, turndown rose petal baths, custom aromatherapy pillow menus, and chilled coconut platters.
5. **Daily Holistic Retreat Itinerary with 1-Click RSVP**: Real-time guest reservation system for sunrise vinyasa yoga, matcha workshops, and sound bath meditations.
6. **Dedicated Full-Page Reservation Desk (`HOTEL_BOOKING_MAKEMYTRIP.html`)**:
   * 5-Photo mosaic gallery, MMT Assured seal, 4.9★ rating bubble, left amenities & Ayurvedic inclusions, right sticky booking card with `HOTELPRO20` coupon, and simulated UPI/Card payment gateway.
7. **My Bookings & Trips Dashboard (`MY_BOOKINGS_PAGE.html`)**:
   * Active reservations (#HP-MMT-99824, #HP-MMT-78410), 1-click cancellation with 100% instant refund guarantee, and GST tax invoice download.
8. **Secure Multi-Role Authentication Portal (`LOGIN_PAGE.html`)**:
   * 1-Click testing access for Guest Traveler, Butler Staff, and General Manager Administrator.

---

## 📁 System Architecture & Engineering Deliverables

This repository contains full production code and comprehensive architectural documentation organized into 6 core modules:

### 🔷 Module 1: System Architecture & Data Modeling
- [x] **Technical Architecture** -> [`docs/TECHNICAL_ARCHITECTURE.md`](docs/TECHNICAL_ARCHITECTURE.md)
- [x] **Entity-Relationship Diagram (ERD)** -> [`docs/ER_DIAGRAM.md`](docs/ER_DIAGRAM.md)
- [x] **Functional Feature Specifications** -> [`docs/FEATURES.md`](docs/FEATURES.md)
- [x] **Role-Based Access Control (RBAC)** -> [`docs/ROLES_AND_RESPONSIBILITIES.md`](docs/ROLES_AND_RESPONSIBILITIES.md)
- [x] **End-to-End User Journeys** -> [`docs/USER_FLOW.md`](docs/USER_FLOW.md)
- [x] **MVC Architectural Breakdown** -> [`docs/MVC_PATTERN.md`](docs/MVC_PATTERN.md)

### 🔷 Module 2: Project Setup & Environment Configuration
- [x] **Project Directory Architecture** -> [`docs/PROJECT_SETUP_AND_CONFIGURATION.md`](docs/PROJECT_SETUP_AND_CONFIGURATION.md)
- [x] **Client Setup & UI Environment** -> [`docs/PROJECT_SETUP_AND_CONFIGURATION.md`](docs/PROJECT_SETUP_AND_CONFIGURATION.md) & [`client/`](client/)
- [x] **Server Bootstrap & Scripts** -> [`docs/PROJECT_SETUP_AND_CONFIGURATION.md`](docs/PROJECT_SETUP_AND_CONFIGURATION.md) & [`server/package.json`](server/package.json)

### 🔷 Module 3: Backend REST Services & Controller Layer
- [x] **Backend Architecture & Routes** -> [`docs/BACKEND_DEVELOPMENT.md`](docs/BACKEND_DEVELOPMENT.md) & [`server/routes/`](server/routes/)
- [x] **Controller Implementation & API Logic** -> [`docs/BACKEND_DEVELOPMENT.md`](docs/BACKEND_DEVELOPMENT.md) & [`server/controllers/`](server/controllers/)

### 🔷 Module 4: Database Design & Mongoose Modeling
- [x] **Database Configuration & Environment** -> [`docs/DATABASE_DEVELOPMENT.md`](docs/DATABASE_DEVELOPMENT.md)
- [x] **Database Connection Handler** -> [`docs/DATABASE_DEVELOPMENT.md`](docs/DATABASE_DEVELOPMENT.md) & [`server/config/db.js`](server/config/db.js)
- [x] **Mongoose Schemas & Data Models** -> [`docs/DATABASE_DEVELOPMENT.md`](docs/DATABASE_DEVELOPMENT.md) & [`server/models/`](server/models/)

### 🔷 Module 5: Frontend UI & Interactive Engineering
- [x] **Frontend Architecture & Design System** -> [`docs/FRONTEND_DEVELOPMENT.md`](docs/FRONTEND_DEVELOPMENT.md) & [`client/`](client/)
- [x] **Client Interactive Features & Implementation** -> [`docs/FRONTEND_DEVELOPMENT.md`](docs/FRONTEND_DEVELOPMENT.md) & [`client/index.html`](client/index.html)

### 🔷 Module 6: System Execution & Visual Showcase
- [x] **Steps for Project Execution** -> [`docs/STEPS_FOR_PROJECT_EXECUTION.md`](docs/STEPS_FOR_PROJECT_EXECUTION.md)
- [x] **System UI Showcase & Feature Verification** -> [`docs/OUTPUT_SCREENSHOTS_GUIDE.md`](docs/OUTPUT_SCREENSHOTS_GUIDE.md)

📄 *For a complete engineering specification index, view [`docs/PROJECT_SPECIFICATIONS.md`](docs/PROJECT_SPECIFICATIONS.md).*

---

## 🚀 Execution & Setup Guide
* **Instant Evaluation (Zero Setup)**:
  - Main Resort Explorer: Double-click `index.html` (or `client/index.html`).
  - Booking Flow: Open `HOTEL_BOOKING_MAKEMYTRIP.html`.
  - My Bookings & Invoicing: Open `MY_BOOKINGS_PAGE.html`.
  - Multi-Role Login: Open `LOGIN_PAGE.html`.
* **Full-Stack Mode**:
  - Run `npm install` and `npm start` in the `server` directory.
