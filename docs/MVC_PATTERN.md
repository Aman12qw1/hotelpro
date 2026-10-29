# HotelPro (Resort Edition) - MVC Pattern Implementation

This document details the Model-View-Controller (MVC) architectural separation used in HotelPro Resort Edition.

---

## 1. Architectural Layers

### 📁 1. Models (`server/models/`)
* `Villa.js`: Defines sanctuary villa attributes (overwater, pool specifications, reef access, readiness status, 360 perspectives).
* `Booking.js`: Manages reservation lifecycle, date locks, calculate base nights + spa addons + 5% biosphere conservation tax.
* `ButlerRequest.js`: Manages guest-to-butler request tickets, dispatch logs, and completion timestamps.
* `SpaAddon.js`: Schema representing holistic Ayurvedic packages and tariffs.
* `User.js`: Role-Based Access Control (Guest, Butler Staff, GM Admin).

### 📁 2. Views (`client/` & `index.html`)
* **Presentation Components:**
  * `VillaCatalogView`: Responsive grid rendering private overwater residences with high-res photography.
  * `Sanctuary360Modal`: Multi-perspective visualizer with deck, pool, bath, and bedroom angles.
  * `SpaRitualsBuilder`: Interactive add-on checklist recalculating bills dynamically.
  * `ButlerCommandDesk`: Housekeeping readiness board and incoming request dispatch table.
  * `GMAnalyticsView`: Resort KPI indicators and seasonal dynamic rate modifier.

### 📁 3. Controllers (`server/controllers/` & client services)
* `villaController.js`: Handles villa search filters (Lagoon vs Beach vs Cliff), availability checks.
* `bookingController.js`: Validates dates, calculates biosphere conservation tax, issues gold-sealed voucher #OP-MAL.
* `butlerController.js`: Manages real-time queue dispatch and status transitions.
* `adminController.js`: Aggregates occupancy, ADR, RevPAR, and updates seasonal pricing.
