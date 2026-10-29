# HotelPro (Resort Edition) - User Flow Diagrams

This document illustrates the operational journeys for Guests, Butlers, and Managers.

---

## 1. Guest Villa Reservation & Spa Journey

```mermaid
sequenceDiagram
    autonumber
    actor Guest as Honored Guest
    participant View as Sanctuary Client View
    participant Engine as Tariff Calculator
    participant Butler as Island Butler Desk

    Guest->>View: Filter by Category (Overwater / Beachfront / Cliffside)
    Guest->>View: Open "View 360 Sanctuary" & Inspect Angles
    Guest->>View: Select Spa Rituals (Balinese Poultice / Floating Breakfast)
    View->>Engine: Recompute Total (Nights + Rituals + 5% Eco Tax)
    Engine-->>View: Update Bill Total Display
    Guest->>View: Confirm Dates & Issue Gold Reservation Voucher
    View->>Butler: Auto-notify Butler of Guest Arrival Preferences
    View-->>Guest: Present Printable Gold-Sealed Certificate
```

---

## 2. Butler Request & Service Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Requested: Guest Taps "Summon Buggy / Petal Bath"
    Requested --> Dispatched: Assigned to Butler Kadek
    Dispatched --> EnRoute: Buggy in Transit (3 mins)
    EnRoute --> Completed: Service Delivered & Cleared
    Completed --> [*]
```
