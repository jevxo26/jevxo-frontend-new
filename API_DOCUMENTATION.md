# JEVXO Landing Page API Documentation

The following documentation outlines all required backend API endpoints, payload structures, data types, and field descriptions for the JEVXO landing page frontend integration.

---

## 📑 Table of Contents
1. [Contact Form API (Submit Lead)](#1-contact-form-api-submit-lead)
2. [Pricing Plans API](#2-pricing-plans-api)
3. [Testimonials / Client Reviews API](#3-testimonials--client-reviews-api)
4. [Team Specialists API](#4-team-specialists-api)
5. [Case Studies / Portfolio API](#5-case-studies--portfolio-api)
6. [Services API](#6-services-api)
7. [Blog Articles API](#7-blog-articles-api)
8. [Partners & Client Logos API](#8-partners--client-logos-api)
9. [Newsletter Subscription API](#9-newsletter-subscription-api)

---

## 1. Contact Form API (Submit Lead)
Used by the `ContactSection` component to submit project inquiries directly to the backend/CRM.

* **Endpoint**: `POST /api/v1/contact`
* **Content-Type**: `application/json`

### 📥 Request Body
```json
{
  "fullName": "John Doe",
  "email": "john.doe@company.com",
  "whatsappNumber": "+123456578145",
  "selectedBudget": "$500 - $3K",
  "productDetails": "I want to redesign & develop my SaaS web application with responsive UI."
}
```

### 📋 Field Descriptions
| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `fullName` | `string` | **Yes** | Full name of the prospect/client. |
| `email` | `string` | **Yes** | Valid email address for response. |
| `whatsappNumber` | `string` | **No** | WhatsApp / Phone number with country code. |
| `selectedBudget` | `string` | **Yes** | Selected budget range (e.g., `Less than $500`, `$500 - $3K`, `$3K - $5K`, `$5K - $10K`, `$10K - $30K`). |
| `productDetails` | `string` | **Yes** | Detailed project requirements or inquiry text. |

### 📤 Response Payload (`201 Created`)
```json
{
  "success": true,
  "message": "Inquiry submitted successfully. Our team will contact you within 24 hours.",
  "data": {
    "leadId": "lead_984120x",
    "createdAt": "2026-08-14T02:35:00.000Z"
  }
}
```

---

## 2. Pricing Plans API
Used by `PricingSection` to dynamically load pricing tiers and feature items.

* **Endpoint**: `GET /api/v1/pricing`
* **Content-Type**: `application/json`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "plan_starter",
      "name": "Starter Plan",
      "badge": "Ultimate Plan",
      "icon": "Heart",
      "description": "Best For: Campaigns, product launches, MVP validation",
      "price": 500,
      "currency": "$",
      "isPopular": false,
      "features": [
        "All Growth Facilities",
        "Persona & journey mapping",
        "Component-based design",
        "Starter design system",
        "Developer walkthrough",
        "8–15 working Days",
        "3–4 Weeks",
        "4 revision rounds"
      ],
      "buttonText": "Get Started",
      "buttonLink": "#contact"
    },
    {
      "id": "plan_growth",
      "name": "Growth Plan",
      "badge": "Ultimate Plan",
      "icon": "Sparkles",
      "description": "Best For: Campaigns, product launches, MVP validation",
      "price": 1200,
      "currency": "$",
      "isPopular": true,
      "features": [
        "UX discovery workshop",
        "Sitemap & navigation flow",
        "Wireframes for all pages",
        "High-fidelity UI (with responsive)",
        "Interaction states",
        "Create style guide",
        "Dev-handoff support",
        "4–7 pages",
        "10–15 working days",
        "3 revision rounds"
      ],
      "buttonText": "Get Started",
      "buttonLink": "#contact"
    }
  ]
}
```

### 📋 Field Descriptions
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier for the pricing tier. |
| `name` | `string` | Title of the plan (e.g., `Growth Plan`). |
| `badge` | `string` | Top label tag (e.g., `Ultimate Plan`). |
| `icon` | `string` | Icon key identifier (`Heart`, `Sparkles`, `Zap`). |
| `price` | `number` | Numeric price value. |
| `currency` | `string` | Currency symbol (`$`). |
| `isPopular` | `boolean` | Flag to highlight the primary featured card. |
| `features` | `array[string]` | List of feature bullet strings included in the plan. |

---

## 3. Testimonials / Client Reviews API
Used by `TestimonialsSection` to render client quotes and 5-star ratings.

* **Endpoint**: `GET /api/v1/testimonials`
* **Content-Type**: `application/json`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "rev_01",
      "clientName": "Miah rasel bd",
      "clientRole": "Marketing Director",
      "company": "Google Partner Agency",
      "rating": 5,
      "quote": "Their SEO strategies are top-notch. We ranked on the first page of Google within 3 months.",
      "avatarUrl": "/images/client_1.png"
    },
    {
      "id": "rev_02",
      "clientName": "Fenian Umrah",
      "clientRole": "CEO",
      "company": "TechFlow",
      "rating": 5,
      "quote": "Neon Code transformed our brand entirely. The team is incredibly talented and easy to work with.",
      "avatarUrl": "/images/client_2.png"
    }
  ]
}
```

### 📋 Field Descriptions
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `clientName` | `string` | Full name of the client. |
| `clientRole` | `string` | Client designation & company name. |
| `rating` | `number` | Star rating integer (typically `5`). |
| `quote` | `string` | Testimonial text statement. |
| `avatarUrl` | `string` | Profile image URL. |

---

## 4. Team Specialists API
Used by `MeetSpecialistSection` to display team headshots and titles.

* **Endpoint**: `GET /api/v1/team`
* **Content-Type**: `application/json`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "member_01",
      "name": "Andriani Monlio",
      "role": "Founder of Jevxo",
      "image": "/images/team_1.png",
      "bgClass": "bg-[#FFE8A3]"
    },
    {
      "id": "member_02",
      "name": "Andriani Monlio",
      "role": "UI UX Designer Head of Jevxo",
      "image": "/images/team_2.png",
      "bgClass": "bg-[#A7F3D0]"
    }
  ]
}
```

---

## 5. Case Studies / Portfolio API
Used by `CaseStudies` component to display featured portfolio projects.

* **Endpoint**: `GET /api/v1/case-studies`
* **Content-Type**: `application/json`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "cs_01",
      "title": "Fintech Dashboard Redesign",
      "category": "UI/UX Design & Web App",
      "summary": "Increased user engagement by 180% with modern data visualization UI.",
      "coverImage": "/images/case_study_1.png",
      "metrics": "+180% Conversion",
      "slug": "fintech-dashboard-redesign"
    }
  ]
}
```

---

## 6. Services API
Used by `OurService` to list agency capabilities and solution offerings.

* **Endpoint**: `GET /api/v1/services`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "srv_uiux",
      "title": "UI/UX Design System",
      "description": "Custom scalable design systems built for modern web applications.",
      "tags": ["Figma", "Design System", "Prototyping"],
      "icon": "LayoutGrid"
    }
  ]
}
```

---

## 7. Blog Articles API
Used by `BlogSection` to show the latest blog posts.

* **Endpoint**: `GET /api/v1/blogs`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": "blog_01",
      "title": "Why Great UI/UX Is A Competitive Advantage",
      "excerpt": "Thoughtful perspectives on design, UX, branding, and digital products.",
      "publishedDate": "2025-07-31",
      "readTime": "5 min read",
      "coverImage": "/images/blog_1.png",
      "slug": "why-great-uiux-is-a-competitive-advantage"
    }
  ]
}
```

---

## 8. Partners & Client Logos API
Used by `Partners` component for trusted brand logos.

* **Endpoint**: `GET /api/v1/partners`

### 📤 Response Payload (`200 OK`)
```json
{
  "success": true,
  "data": [
    { "id": "p1", "name": "Framer", "logoUrl": "/images/logos/framer.svg" },
    { "id": "p2", "name": "Miro", "logoUrl": "/images/logos/miro.svg" }
  ]
}
```

---

## 9. Newsletter Subscription API (Optional)
Used for newsletter footer / popups.

* **Endpoint**: `POST /api/v1/newsletter/subscribe`
* **Request Payload**:
```json
{
  "email": "user@example.com"
}
```
* **Response Payload**: `200 OK`
```json
{
  "success": true,
  "message": "Subscribed successfully!"
}
```
