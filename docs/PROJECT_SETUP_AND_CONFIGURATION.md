# Project Architecture & Environment Setup

This document details the project folder structure, environment configuration, and client/server setup for **HotelPro - Luxury Eco-Resort & Spa Sanctuary**.

---

## 📁 1. Project Directory Architecture

The project follows a clean separation of concerns:
```
hotelpro/
├── client/                     # Frontend client mirror and UI assets
│   ├── index.html              # Main resort portal and villa catalog
│   ├── HOTEL_BOOKING_MAKEMYTRIP.html  # Dedicated reservation experience
│   ├── MY_BOOKINGS_PAGE.html   # Active trips, cancellation, & GST invoice desk
│   └── LOGIN_PAGE.html         # Multi-role authentication portal
├── server/                     # Backend Express REST API
│   ├── config/
│   │   └── db.js               # MongoDB connection and fallback handler
│   ├── controllers/            # Request handlers (Villa, Booking, Butler, Auth)
│   ├── models/                 # Mongoose schemas (User, Villa, Booking, ButlerRequest, SpaRitual, Review)
│   ├── routes/                 # Express API routes
│   ├── seed/
│   │   └── seed.js             # Initial database seeder
│   ├── package.json            # Backend dependencies
│   └── server.js               # Express application entry point
├── docs/                       # Architecture, diagrams, and evaluation guides
│   ├── TECHNICAL_ARCHITECTURE.md
│   ├── ER_DIAGRAM.md
│   ├── FEATURES.md
│   ├── ROLES_AND_RESPONSIBILITIES.md
│   ├── USER_FLOW.md
│   ├── MVC_PATTERN.md
│   ├── STEPS_FOR_PROJECT_EXECUTION.md
│   ├── OUTPUT_SCREENSHOTS_GUIDE.md
│   ├── DATABASE_DEVELOPMENT.md
│   ├── BACKEND_DEVELOPMENT.md
│   ├── FRONTEND_DEVELOPMENT.md
│   └── PROJECT_SPECIFICATIONS.md
├── index.html                  # Standalone zero-dependency resort launcher
├── package.json                # Root orchestration scripts
└── README.md                   # Project overview & documentation
```

### Initialization Commands
```bash
mkdir hotelpro
cd hotelpro
npm init -y
mkdir client server docs
```

---

## 💻 2. Client Setup & Runtime Architecture

### Overview
The client is architected to support two modes:
1. **Zero-Dependency Instant Mode**: Direct browser launch via `index.html` with Tailwind CSS CDN, Lucide Icons, and Web Audio API synthesis.
2. **Modular MERN Mode**: Located in `/client` with modular script bindings.

### Client Dependencies & Libraries
- **Tailwind CSS (v3 CDN)**: Utility-first styling for glassmorphic dark-forest aesthetic.
- **Font Awesome 6 & Lucide**: Modern vector icons for amenities and navigation.
- **Web Audio API**: Real-time synthesized ocean wave soundscapes.
- **HTML5 LocalStorage**: Persistent client-side reservation state and user sessions.

---

## ⚙️ 3. Server Setup & Runtime Configuration

### Backend Configuration
The server runs on Node.js and Express.js, providing RESTful endpoints with CORS enabled for frontend communication.

### Installation & Run Instructions
```bash
cd server
npm install
npm run seed
npm start
```

### Server Dependencies (`server/package.json`)
```json
{
  "name": "hotelpro-resort-server",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js",
    "seed": "node seed/seed.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.3.1"
  }
}
```
