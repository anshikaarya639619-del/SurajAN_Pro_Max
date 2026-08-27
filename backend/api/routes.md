# SURAJAN PRO MAX
# BACKEND API ROUTES
# VERSION 1.0

---

# 01 — API PRINCIPLES

Base:

/api/v1

Rules:

- Validate every request.
- Authenticate protected endpoints.
- Authorize every resource access.
- Never trust client-side payment status.
- Never expose private storage URLs.
- Never expose secrets.
- Return consistent errors.
- Apply rate limits where appropriate.

---

# 02 — HEALTH

GET /api/v1/health

Purpose:

Check whether the API is operational.

Response should contain:

status
service
timestamp

Never expose secrets or internal
infrastructure details.

---

# 03 — PRODUCTS

GET /api/v1/products

Purpose:

Return active public products.

Public fields may include:

product_id
title
slug
description
category
price_usd
currency
version

Never return:

private file references
storage credentials
internal secrets

---

GET /api/v1/products/:slug

Purpose:

Return one active product.

---

# 04 — ORDERS

POST /api/v1/orders

Purpose:

Create a pending order.

Server must determine:

- Product identity
- Current price
- Currency
- Order ID

Never trust the browser to define
the final payable amount.

Initial status:

PENDING

---

GET /api/v1/orders/:order_id

Purpose:

Return the authenticated customer's
own order information.

Never allow one customer to access
another customer's order.

---

# 05 — CHECKOUT

POST /api/v1/checkout

Purpose:

Create a checkout session with the
configured payment provider.

Server calculates the amount.

Client does NOT control:

price
currency
product ownership

---

# 06 — PAYMENT WEBHOOK

POST /api/v1/webhooks/payment

Purpose:

Receive payment-provider events.

Required process:

RECEIVE EVENT
↓
VERIFY SIGNATURE
↓
CHECK EVENT ID
↓
CHECK ORDER
↓
VERIFY AMOUNT/CURRENCY
↓
UPDATE PAYMENT
↓
UPDATE ORDER
↓
TRIGGER DELIVERY

Never trust an unsigned webhook.

Never process the same external event
more than once.

---

# 07 — DELIVERY

POST /api/v1/orders/:order_id/delivery

Internal/admin/service use only.

Purpose:

Trigger delivery after verified payment.

Do NOT expose this endpoint as a
public "give me my PDF" endpoint.

---

GET /api/v1/orders/:order_id/download

Purpose:

Request secure access to a purchased
digital product.

Required checks:

- Authenticated customer
- Valid order
- Payment status = PAID
- Product association
- Access not revoked

Return a short-lived protected
download mechanism.

---

# 08 — CUSTOMER

GET /api/v1/me

Purpose:

Return the authenticated customer's
basic account information.

Only minimum required data.

---

# 09 — ANALYTICS

POST /api/v1/events

Purpose:

Record permitted analytics events.

Examples:

PAGE_VIEW
PRODUCT_VIEW
CTA_CLICK
CHECKOUT_STARTED
PURCHASE_COMPLETED
DOWNLOAD_COMPLETED

Do not collect unnecessary
personal information.

---

# 10 — AUTOMATION

These endpoints should be internal,
authenticated service endpoints.

POST /api/v1/internal/jobs/run

POST /api/v1/internal/analytics/run

POST /api/v1/internal/recovery/run

POST /api/v1/internal/product-review/run

Never expose internal automation
endpoints publicly.

---

# 11 — ERROR FORMAT

Use a consistent structure:

{
  "error": {
    "code": "ERROR_CODE",
    "message": "Safe user-facing message"
  }
}

Never return:

- API secrets
- Stack traces
- Database credentials
- Internal tokens
- Private infrastructure details

---

# 12 — RATE LIMITING

Apply rate limits to sensitive endpoints:

- Login
- Checkout creation
- Download requests
- Event ingestion
- Public API requests

The exact limits should depend
on production traffic.

---

# 13 — AUTHORIZATION

Authentication answers:

"Who are you?"

Authorization answers:

"Are you allowed to access this?"

Every private resource must perform
both checks where applicable.

---

# 14 — PAYMENT SECURITY

The backend must verify:

- Provider signature
- Event ID
- Order ID
- Amount
- Currency
- Payment status

Only verified payment should
change an order to:

PAID

---

# 15 — IDEMPOTENCY

Use idempotency for:

- Order creation where applicable
- Checkout creation where applicable
- Payment webhooks
- Delivery jobs
- Email jobs

Duplicate requests must not
create duplicate fulfillment.

---

# 16 — API VERSIONING

Current:

/api/v1

Future breaking changes:

/api/v2

Do not silently break existing
production clients.

---

# 17 — OBSERVABILITY

Log safely:

- Request ID
- Endpoint
- Status code
- Duration
- Error code
- Relevant service ID

Never log:

- Passwords
- Payment card data
- API secrets
- Authentication tokens
- Private download tokens

---

# 18 — CORS

Allow only the production frontend
origins that actually require access.

Do not use unrestricted wildcard
CORS for authenticated production
APIs unless there is a specific,
reviewed reason.

---

# 19 — SECURITY PRINCIPLE

PUBLIC
↓
LIMITED ACCESS

AUTHENTICATED
↓
USER-OWNED DATA

INTERNAL
↓
SERVICE AUTHENTICATION

ADMIN
↓
STRICT AUTHORIZATION

---

# 20 — CORE FLOW

CUSTOMER
↓
GET PRODUCT
↓
CREATE ORDER
↓
CREATE CHECKOUT
↓
PAYMENT PROVIDER
↓
VERIFIED WEBHOOK
↓
ORDER = PAID
↓
DELIVERY JOB
↓
SECURE ACCESS
↓
CUSTOMER DOWNLOAD

---

# FINAL OBJECTIVE

Create a secure, versioned API layer
connecting the SurajAN Pro Max frontend,
database, payment provider, delivery
system and autonomous services.

END.
