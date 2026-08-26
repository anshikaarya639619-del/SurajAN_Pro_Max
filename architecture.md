# SURAJAN PRO MAX
# GLOBAL PDF STORE OS

VERSION 3.0

---

## PRIMARY MARKET

Global

## PRIMARY LANGUAGE

English

## PRIMARY DISPLAY CURRENCY

USD ($)

---

# FRONTEND

index.html

Responsibilities:

- Premium storefront
- Product catalog
- Search
- Categories
- Product discovery
- Mobile experience

---

# PRODUCT DATABASE

store.json

Each product contains:

- id
- title
- subtitle
- description
- price
- currency
- category
- file
- featured

---

# GLOBAL COMMERCE ARCHITECTURE

TRAFFIC
↓
STORE
↓
PRODUCT
↓
CHECKOUT
↓
PAYMENT PROVIDER
↓
SERVER VERIFICATION
↓
ORDER DATABASE
↓
PROTECTED DELIVERY
↓
CUSTOMER

---

# CURRENCY

The storefront is USD-first.

Example:

$9
$19
$29
$49

A future checkout layer can support additional
currencies where legally and technically available.

---

# PAYMENT

The frontend must never pretend that a payment
was successful.

Production flow:

1. Customer starts checkout.
2. Payment provider processes payment.
3. Server receives provider webhook.
4. Server verifies the event.
5. Order is recorded.
6. Customer receives controlled access.

---

# SECURITY

Never place:

- API secret keys
- Payment secrets
- Database passwords
- Private authentication tokens
- Protected paid files

inside a public GitHub repository.

---

# GLOBAL READY

The architecture is prepared for:

- International customers
- USD pricing
- Multiple product categories
- Multiple payment methods
- Protected digital delivery
- Email receipts
- Analytics
- Future subscriptions
- Bundles

---

# IMPORTANT

Payment availability depends on the seller's
country, account type, verification and provider rules.

Do not bypass age, identity or compliance requirements.
