🚖 Ride Booking Platform

Live Frontend: https://your-frontend.vercel.app

Live Backend API: https://your-backend.onrender.com

📌 Project Overview

This is a full-stack, role-based Ride Booking Platform (similar to Uber/Pathao).
It provides tailored dashboards for Riders, Drivers, and Admins, secure authentication, and a responsive UI/UX.

The system enables Riders to request rides, Drivers to accept/manage rides, and Admins to oversee users and platform analytics.

✨ Features
🔐 Authentication & Authorization

JWT-based login & registration with role selection (Rider, Driver, Admin).

Persistent login state across sessions.

Role-based redirects and route protection.

Blocked/suspended users see a status page with instructions.

🧍 Rider

Request rides (pickup & destination).

View fare estimation.

Manage ride history with filters & pagination.

Cancel ride (when active).

View ride details with timeline.

Profile update (name, phone, password).

🚗 Driver

Toggle Online/Offline availability.

View & accept/reject incoming ride requests.

Manage Active Rides through lifecycle:
Accepted → Picked Up → In Transit → Completed/Cancelled.

View earnings dashboard (daily/weekly/monthly) with charts.

View ride history with filters & pagination.

Profile management (vehicle info, license, password).

Offline banner hides accept/reject buttons until driver goes online.

🛠️ Admin

Dashboard analytics: user counts, online/blocked/suspended status.

View & manage all users: block/unblock, approve drivers, suspend/unsuspend.

View rides with filtering by status/date/driver/rider.

Analytics charts: ride volume, revenue trends, driver activity.

🎨 General UI/UX

Fully responsive design (mobile-first).

Consistent typography, spacing, and color scheme.

Skeleton loaders & lazy-loading.

Toast notifications (success/error).

Error handling for API/network issues.

Accessibility-friendly components.

🛠️ Technology Stack
Frontend

React.js + TypeScript

Redux Toolkit + RTK Query for state & API calls

React Router v6 for routing

Tailwind CSS for styling

Recharts for analytics

React Hot Toast for notifications

Backend

Node.js + Express

MongoDB + Mongoose

JWT + bcrypt for authentication

Zod / validation middleware

Role-based access middleware

Aggregations for analytics

Deployment

Frontend → Vercel

Backend → Render / Railway

Database → MongoDB Atlas

⚙️ Setup Instructions
Backend
git clone https://github.com/your-username/ride-booking-backend
cd ride-booking-backend
cp .env.example .env
npm install
npm run dev


.env.example

PORT=5000
MONGODB_URI=your-mongo-uri
JWT_ACCESS_SECRET=your-secret
JWT_ACCESS_EXPIRES=7d
CORS_ORIGIN=https://your-frontend.vercel.app

Frontend
git clone https://github.com/your-username/ride-booking-frontend
cd ride-booking-frontend
cp .env.example .env
npm install
npm run dev


.env.example

VITE_API_URL=https://your-backend.onrender.com

👥 Test Credentials
Admin
  Email: admin@example.com
  Password: 123456

Driver
  Email: driver@example.com
  Password: 123456

Rider
  Email: rider@example.com
  Password: 123456
