# SURAJAN PRO MAX
# DATABASE SCHEMA
# VERSION 1.0

---

## 01 — USERS

Purpose:
Store only the minimum customer information
required for account/order/support operations.

Fields:

user_id
email
created_at
updated_at
status

Possible status:

ACTIVE
BLOCKED
DELETED

Privacy rule:

Never store unnecessary personal information.

---

## 02 — PRODUCTS

Fields:

product_id
title
slug
description
category
price_usd
currency
version
file_reference
status
created_at
updated_at

Possible status:

DRAFT
ACTIVE
PAUSED
RETIRED

---

## 03 — ORDERS

Fields:

order_id
user_id
product_id
amount
currency
payment_status
order_status
created_at
updated_at

Possible payment_status:

PENDING
PAID
FAILED
REFUNDED
CHARGEBACK_REVIEW

Possible order_status:

CREATED
PROCESSING
FULFILLED
CANCELLED

---

## 04 — PAYMENTS

Fields:

payment_id
order_id
provider
provider_transaction_id
amount
currency
status
created_at
updated_at

Important:

provider_transaction_id must be unique.

Never trust client-submitted
payment confirmation.

---

## 05 — DELIVERIES

Fields:

delivery_id
order_id
product_id
delivery_status
access_reference
email_status
download_count
created_at
updated_at

Possible delivery_status:

PENDING
READY
DELIVERED
FAILED
REVOKED

---

## 06 — DOWNLOAD EVENTS

Fields:

download_id
order_id
product_id
timestamp
result

Do not collect unnecessary
device or location information.

---

## 07 — ANALYTICS EVENTS

Fields:

event_id
event_type
product_id
timestamp
source
metadata

Possible event types:

PAGE_VIEW
PRODUCT_VIEW
CTA_CLICK
CHECKOUT_STARTED
PURCHASE_COMPLETED
DOWNLOAD_COMPLETED
REFUND
CONTENT_CLICK

Do not store unnecessary personal data.

---

## 08 — EXPERIMENTS

Fields:

experiment_id
name
hypothesis
variable
start_date
end_date
status
result
created_at

Possible status:

PLANNED
RUNNING
COMPLETED
PAUSED
CANCELLED

---

## 09 — AUTOMATION JOBS

Fields:

job_id
job_type
status
scheduled_at
started_at
completed_at
attempts
error_reference

Possible status:

QUEUED
RUNNING
COMPLETED
FAILED
CANCELLED

---

## 10 — WEBHOOK EVENTS

Fields:

webhook_event_id
provider
external_event_id
event_type
processed
received_at
processed_at

Important:

external_event_id must be unique.

Purpose:

Prevent duplicate webhook processing.

---

## 11 — RELATIONSHIPS

USER
│
├── ORDERS
│
└── ANALYTICS EVENTS

PRODUCT
│
├── ORDERS
├── DELIVERIES
└── ANALYTICS EVENTS

ORDER
│
├── PAYMENT
└── DELIVERY

---

## 12 — SECURITY RULES

Never store:

- Payment card numbers
- CVV
- API secrets
- Webhook secrets
- Database passwords

Use the payment provider for
sensitive payment information.

---

## 13 — DATA RETENTION

Keep only information required for:

- Order fulfillment
- Customer support
- Accounting
- Security
- Legal obligations
- Business analytics

Delete or anonymize information
when it is no longer legitimately required,
subject to applicable retention obligations.

---

## 14 — DATA INTEGRITY

Required safeguards:

- Unique IDs
- Foreign-key relationships
- Unique payment references
- Unique webhook references
- Transaction-safe order updates
- Audit-friendly timestamps

---

## 15 — REVENUE DATA

Revenue calculations must use:

VERIFIED PAID ORDERS

Exclude:

PENDING
FAILED
CANCELLED

Handle:

REFUNDS
CHARGEBACKS

separately.

---

## FINAL DATABASE PRINCIPLE

MINIMUM DATA

STRONG INTEGRITY

SECURE PAYMENTS

VERIFIED ORDERS

PROTECTED DELIVERY

AUDITABLE EVENTS

PRIVACY BY DESIGN

END.
