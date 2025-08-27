# 🚖 Ride Booking Platform

**Live Frontend:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)  
**Live Backend API:** [https://your-backend.onrender.com](https://your-backend.onrender.com)

---

## 📌 Project Overview

A full-stack, role-based Ride Booking Platform (similar to Uber/Pathao) with tailored dashboards for **Riders**, **Drivers**, and **Admins**, secure authentication, and a responsive UI/UX.

- **Riders:** Request rides, manage ride history, cancel rides, and update profiles.
- **Drivers:** Accept/manage rides, track earnings, and manage vehicle profile.
- **Admins:** Oversee users, platform analytics, and manage ride data.

---

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based login & registration** with role selection (Rider, Driver, Admin)
- Persistent login state across sessions
- Role-based redirects and route protection
- Blocked/suspended users see a status page with instructions

### 🧍 Rider
- Request rides (pickup & destination)
- View fare estimation
- Manage ride history (filters & pagination)
- Cancel active rides
- View ride details with timeline
- Profile update (name, phone, password)

### 🚗 Driver
- Toggle Online/Offline availability
- View & accept/reject incoming ride requests
- Manage Active Rides through lifecycle:  
  Accepted → Picked Up → In Transit → Completed/Cancelled
- Earnings dashboard (daily/weekly/monthly) with charts
- Ride history (filters & pagination)
- Profile management (vehicle info, license, password)
- Offline banner hides accept/reject buttons until online

### 🛠️ Admin
- Dashboard analytics: user counts, online/blocked/suspended status
- Manage users: block/unblock, approve drivers, suspend/unsuspend
- View rides (filter by status/date/driver/rider)
- Analytics charts: ride volume, revenue trends, driver activity

### 🎨 General UI/UX
- Fully responsive design (mobile-first)
- Consistent typography, spacing, and color scheme
- Skeleton loaders & lazy-loading
- Toast notifications (success/error)
- Error handling for API/network issues
- Accessibility-friendly components

---

## 🛠️ Technology Stack

### Frontend
- **React.js + TypeScript**
- **Redux Toolkit + RTK Query** (state & API calls)
- **React Router v6** (routing)
- **Tailwind CSS** (styling)
- **Recharts** (analytics)
- **React Hot Toast** (notifications)

### Backend
- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT + bcrypt** (authentication)
- **Zod / validation middleware**
- **Role-based access middleware**
- **Aggregations for analytics**

### Deployment
- **Frontend:** Vercel
- **Backend:** Render / Railway
- **Database:** MongoDB Atlas

---

## ⚙️ Setup Instructions

### Backend

```sh
git clone https://github.com/your-username/ride-booking-backend
cd ride-booking-backend
cp .env.example .env
npm install
npm run dev
```

**.env.example**
```env
PORT=5000
MONGODB_URI=your-mongo-uri
JWT_ACCESS_SECRET=your-secret
JWT_ACCESS_EXPIRES=7d
CORS_ORIGIN=https://your-frontend.vercel.app
```

---

### Frontend

```sh
git clone https://github.com/your-username/ride-booking-frontend
cd ride-booking-frontend
cp .env.example .env
npm install
npm run dev
```

**.env.example**
```env
VITE_API_URL=https://your-backend.onrender.com
```

---

## 👥 Test Credentials

| Role   | Email                  | Password |
|--------|------------------------|----------|
| Admin  | admin@example.com      | 123456   |
| Driver | driver@example.com     | 123456   |
| Rider  | rider@example.com      | 123456   |

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.
