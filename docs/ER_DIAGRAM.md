# HotelPro (Resort Edition) - Entity Relationship (ER) Diagram

This document illustrates the complete relational data architecture and Mongoose ODM schema mappings implemented for **HotelPro - Luxury Eco-Resort & Spa Sanctuary Edition**.

---

## 1. Relational Entity Architecture (Mermaid)

```mermaid
erDiagram
    USER ||--o{ VILLA_BOOKING : "places"
    USER ||--o{ RESORT_REVIEW : "writes"
    USER ||--o{ ECO_PASSPORT_LEDGER : "earns"
    USER ||--o{ AUDIT_ACTIVITY_LOG : "triggers"
    
    RESORT_SANCTUARY ||--|{ SANCTUARY_VILLA : "encompasses"
    RESORT_SANCTUARY ||--o{ RETREAT_SESSION : "schedules"
    
    SANCTUARY_VILLA ||--o{ VILLA_BOOKING : "reserved_in"
    SANCTUARY_VILLA ||--o{ BUTLER_SERVICE_TICKET : "destination_of"
    
    VILLA_BOOKING ||--o{ SPA_RITUAL_ADDON : "includes"
    VILLA_BOOKING ||--|| PAYMENT_TRANSACTION : "settled_by"
    VILLA_BOOKING ||--o{ BUTLER_SERVICE_TICKET : "authorizes"
    VILLA_BOOKING ||--|| ECO_PASSPORT_LEDGER : "generates"

    USER {
        ObjectId _id PK
        string fullName
        string email UK
        string password
        string role "guest | butler_staff | gm_admin"
        string phone
        string vipMembershipTier "Silver | Gold | Diamond"
        number oasisPearlsBalance
        date createdAt
    }

    RESORT_SANCTUARY {
        ObjectId _id PK
        string sanctuaryName "HotelPro Baa Atoll Biosphere & Ubud Forest"
        string atollLocation "Maldives & Bali"
        string seaplaneCoordinates
        boolean solarPowered100Pct
        number totalVillasCount
        array resortAmenities "Private Seaplane, Dhoni Yacht, Lotus Spa, Yoga Shala"
        date establishedDate
    }

    SANCTUARY_VILLA {
        ObjectId _id PK
        ObjectId sanctuaryId FK
        string villaCode "V-101 to V-114"
        string title "Royal Overwater Sunset Villa | Beachfront Pavilion"
        string category "overwater | beachfront | cliffside_spa"
        number nightlyPriceINR
        number guestCapacity "2 to 6 Adults"
        string poolSpecifications "12m Glass Plunge Pool | Fresh Stone Pool"
        string reefAccessType "Direct Wooden Ladder to Coral Garden"
        string readinessStatus "Prepared & Available | Occupied | Turndown | Deep Cleansed"
        array panoramic360Angles "deck, pool, bath, bedroom"
        array highResGallery
        boolean isFeatured
        date createdAt
    }

    VILLA_BOOKING {
        ObjectId _id PK
        string reservationNumber UK "#HP-RES-8892"
        ObjectId userId FK
        ObjectId villaId FK
        date checkInDate
        date checkOutDate
        number nightsCount
        number guestsCount
        number villaBaseTotal
        number experienceAddonsTotal
        number biosphereEcoTax "5 percent of base"
        number grandTotal
        string specialButlerPreferences "Chilled Champagne, Sandalwood Pillow Aroma"
        string bookingStatus "confirmed | active | checked_out | cancelled"
        string cancellationReason
        date createdAt
    }

    SPA_RITUAL_ADDON {
        ObjectId _id PK
        ObjectId bookingId FK
        string ritualName "Balinese Herbal Poultice | Floating Breakfast | Sunset Dhoni Cruise"
        number durationMinutes "60 to 120"
        number ritualTariffINR "3500 to 8500"
        string practitionerName "Master Herbalist Ni Luh"
        date scheduledDate
    }

    BUTLER_SERVICE_TICKET {
        ObjectId _id PK
        ObjectId bookingId FK
        ObjectId villaId FK
        string requestType "Island Buggy Pickup | Rose Petal Bath Prep | Pillow Menu | Coconut Platter"
        string assignedButler "Butler Kadek Suryana"
        number estimatedArrivalMins "3"
        string dispatchStatus "Dispatched | In_Transit | Completed"
        date requestedAt
        date completedAt
    }

    RETREAT_SESSION {
        ObjectId _id PK
        ObjectId sanctuaryId FK
        string sessionTitle "Sunrise Vinyasa Yoga | Matcha Elixir Workshop | Sound Bath"
        string instructor "Master Yogi Ananda | Sound Healer Maya"
        string venueLocation "Overwater Shala Deck | Lotus Pavilion"
        string timeSlot "07:00 AM - 08:15 AM"
        number maxCapacity "15 Guests"
        array rsvpGuestIds
    }

    ECO_PASSPORT_LEDGER {
        ObjectId _id PK
        ObjectId userId FK
        ObjectId bookingId FK
        number co2KgOffset "22 kg per night"
        number nativeMangrovesPlanted "4 trees"
        string coralFragmentRegistryId "UNESCO-BAA-2026-ECO-7782"
        boolean singleUsePlasticEradicated "true"
        date issuedAt
    }

    PAYMENT_TRANSACTION {
        ObjectId _id PK
        ObjectId bookingId FK
        ObjectId userId FK
        string transactionId UK "TXN-OP-994821"
        string voucherNumber UK "#HP-VOUCH-8892"
        number totalAmountSettled
        string settlementMethod "Luxury Card | Instant UPI | Oasis Pearls"
        string status "success | refunded"
        date paidAt
    }

    RESORT_REVIEW {
        ObjectId _id PK
        ObjectId userId FK
        ObjectId villaId FK
        number ratingScore "1 to 5 Stars"
        string reviewText
        boolean verifiedSanctuaryGuest
        date createdAt
    }

    AUDIT_ACTIVITY_LOG {
        ObjectId _id PK
        ObjectId userId FK
        string role "guest | butler_staff | gm_admin"
        string eventAction "VILLA_RESERVATION | BUTLER_DISPATCH | TARIFF_MODIFICATION"
        string detailsPayload
        string ipAddress
        date timestamp
    }
```

---

## 2. Key Architectural Constraints & Normalization

1. **Third Normal Form (3NF) Compliance:**
   * All redundant billing fields (e.g., base nightly tariff, biosphere tax, spa addons) are deterministically calculated and separated into independent normalized tables.
2. **Referential Integrity:**
   * Foreign keys enforce cascade constraints; a cancellation in `VILLA_BOOKING` releases date locks in `SANCTUARY_VILLA` and cancels active `BUTLER_SERVICE_TICKET` entries.
3. **Audit Trail Immutability:**
   * Entries in `ECO_PASSPORT_LEDGER` and `AUDIT_ACTIVITY_LOG` are append-only to ensure absolute verification for UNESCO environmental compliance and college submission scrutiny.
