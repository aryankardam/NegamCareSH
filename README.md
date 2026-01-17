# Negam Care – Corporate Website (Full Stack)

This repository contains the complete source code for the **Negam Care corporate website**, including both **frontend and backend** implementations.  
The application is designed to support informational pages along with **Contact Enquiry** and **Career Application** workflows via secure email-based processing.

---

## Live (Development)
Frontend (Vercel – Dev):  
https://negam-care-sh.vercel.app/

---

##  Project Overview

The Negam Care website is a modern, responsive, and scalable web application built using a **React + Node.js** stack.

### Key Features
- Corporate marketing website (Home, About, Services, Contact, Careers)
- Contact enquiry form with email notifications
- Career application form with resume upload (PDF/DOC/DOCX)
- Email-based workflow (no database dependency)
- Production-ready architecture
- Clean, modular codebase following industry standards

---

## Tech Stack

### Frontend
- **React.js (v19)**  
- **Vite** – build tool  
- **Tailwind CSS** – styling  
- **Framer Motion** – animations  
- **React Router DOM** – routing  
- **Axios** – API communication  
- **React Icons** – icons  

### Backend
- **Node.js**  
- **Express.js**  
- **Nodemailer (SMTP)** – email service  
- **Multer** – in-memory file uploads  
- **Environment-based configuration (.env)**  

---

## Folder Structure

```
NegamCareSH/
├── backend/                # Express API
│   ├── config/             # SMTP & App configs
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # File validation & Security
│   ├── routes/             # API route definitions
│   ├── utils/              # Email templates & Helpers
│   └── server.js           # Entry point
├── intern-website/         # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # View logic
│   │   ├── services/       # API abstraction layer
│   │   └── assets/         # Static media
│   └── vite.config.js
└── README.md
```
---

## API Endpoints

### Health Check
GET /api/health


### Contact Enquiry
POST /api/enquiry
Content-Type: application/json

Request Body:
```json
{
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "email": "string",
  "designation": "string",
  "organization": "string",
  "message": "string"
}
```

### Career Application
POST /api/careers
Content-Type: multipart/form-data
```
Form Fields:
          name
          email
          phone
          position
          message (optional)
          resume (PDF / DOC / DOCX)
```

## Environment Variables
### Backend (.env)
```
PORT=5000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password

ENQUIRY_RECEIVER=enquiry@domain.com
CAREER_RECEIVER=career@domain.com

CLIENT_URL=http://localhost:5173
```

Note:
      Use a Gmail App Password, not a normal Gmail password
      .env is excluded from version control

### Frontend ↔ Backend Integration

- Frontend communicates via /api/* routes
- Vite proxy configuration forwards requests during development
- Backend CORS configured for frontend domain
- No database dependency (email-only workflow)     

---

## Running the Project Locally
### Backend
```
cd backend
npm install
npx nodemon server.js
```
Backend runs on: http://localhost:5000

### Frontend
```
cd intern-website
npm install
npm run dev
```
Frontend runs on: http://localhost:5173

## Security & Architecture
- Memory Efficiency: Resumes are processed via MemoryStorage in Multer; files are never written to the local disk, preventing storage bloat and directory traversal attacks.
- CORS Policy: Restrictive CORS configured to allow only authorized frontend origins.
- Validation: Strict file-type checking for recruitment uploads

---

## Maintainer
**Aryan Kardam** Full Stack Developer – Negam Care Project

## License
Internal / Proprietary Copyright © 2025 Negam Care. All rights reserved. Unauthorized copying of files via any medium is strictly prohibited.
