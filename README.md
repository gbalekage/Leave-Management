# 🌿 Leave Management Web App

A modern, full-featured web application for managing employee leave requests, approvals, and reporting — ideal for HR teams, managers, and staff in small to medium-sized organizations.

---

## ✨ Features

- 🧑‍💼 Submit and manage employee leave requests
- 🔐 Role-based access: Admin, Employee
- 🧮 Leave balance tracking by category
- 📆 Calendar view of team absences
- 📧 Email notifications for status updates
- 📊 Admin dashboard with summary statistics
- 🌐 REST API with full CRUD 

---

## 🖥️ Tech Stack

| Layer    | Technology                                  |
| -------- | ------------------------------------------- |
| Frontend | Vite + React + TypeScript + Tailwind CSS |
| Backend  | Node.js + Express.js                        |
| Database | PostgreSQL NEON                             |
| Auth     | JWT                                         |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn
- PostgreSQL NEON

### 1. Clone the repository

```bash
git clone https://github.com/gbalekage/Leave-Management.git
cd Leave-Management
```

# Backend

cd server
npm install

# Frontend

cd ../client
npm install


### example of .env (backend)
PORT=5000
DATABASE_URL= "postgresql://neondb_owner:npg_kYNoFVUv41nr@ep--a2wobffb-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

### example of .env (frontend)
VITE_API_URL=http://localhost:5000/api

# Start backend
cd server
npm run server

# Start frontend
cd ../client
npm run dev


### project structure 
leave-management-app/
├── client/             # Frontend (Next.js React + TS)
│   ├── src/
│   └── public/
├── server/             # Backend (Express.js)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
└── .env
