# HotelPro (Resort Edition) - Steps for Project Execution

This guide provides step-by-step instructions to run, test, and present the **HotelPro - Luxury Eco-Resort & Spa Edition**.

---

## 🚀 1. Instant 1-Click Launch (Zero-Setup Option)
You can test and evaluate the entire application immediately without installing Node.js, databases, or build dependencies:
1. Simply double-click **`index.html`** in this project folder (or the standalone `HotelPro_Edition_1.html`).
2. The complete application launches instantly in your browser with full interactive features, 360° modals, role switcher, Web Audio ocean wave synthesis, and localStorage state persistence!

---

## 🛠️ 2. Full-Stack MERN Execution (Optional)

### Step A: Start the Backend Server (Port 5001)
```bash
cd server
npm install
npm run seed     # Seeds luxury overwater villas, spa addons, and butler test accounts
npm start        # Launches Express API on http://localhost:5001
```

### Step B: Start the Frontend Client (Port 5174)
```bash
cd client
npm install
npm run dev      # Launches Vite React development server on http://localhost:5174
```

---

## 🔑 3. Testing Personas
Use the **1-Click Role Switcher** in the top navigation bar to test:
* **Guest Mode:** Explore villas, 360 view, spa builder, and reserve sanctuary.
* **Butler / Staff Mode:** Inspect villa readiness, accept butler request tickets.
* **GM Admin Mode:** View ADR and occupancy analytics, adjust seasonal pricing.
