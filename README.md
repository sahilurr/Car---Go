# Car Go - Full-Stack Car Rental Platform

**Car Go** is a comprehensive car rental solution built on the **MERN stack**, designed to address key market challenges like limited vehicle availability, pricing opacity, and fraud risks. The platform offers a seamless experience for three distinct user roles: **Customers, Vendors, and Admins**, and integrates advanced **AI-driven features** to enhance productivity and user experience.

---
##Presentation link -https://drive.google.com/file/d/1rzkOztgPN5CQGgD_tBIhYnkmWCOXqCKU/view?usp=drive_link

##  Key Features

### 👤 Customer Features

* 
**Availability-Aware Search**: Real-time search that prevents double-bookings by checking vehicle availability for specific date ranges.


* 
**Advanced Filtering**: Filter cars by location, price, type, and date.


* 
**Secure Payments**: Integrated **Razorpay** gateway for safe and verified transactions.


* 
**Booking Management**: View past and upcoming bookings through a personal dashboard.


* 
**AI Trip Planner**: Generates full itineraries and vehicle recommendations based on destination and trip length.



###  Vendor Features (Vehicle Owners)

* 
**Dedicated Dashboard**: Overview of listed vehicles, booking requests, and total earnings.


* 
**Vehicle Listing**: Add vehicles with details like model, price, photos, and insurance dates.


* 
**AI Listing Generator**: Automatically generates persuasive vehicle descriptions by analyzing basic car facts.


* 
**Booking Oversight**: Track renter details and manage pick-up/drop-off statuses.



### 🛡️ Admin Features

* 
**Centralized Analytics**: High-level view of key metrics, including total users, active bookings, and revenue.


* 
**Approval Workflow**: Review and approve/reject new vendor accounts and vehicle listings to ensure quality.


* 
**AI Review Summarizer**: Instantly summarizes all reviews for a specific vendor to facilitate data-driven decisions.


* 
**Content Management**: Update master data for car models and service locations.



---

## 🛠️ Tech Stack

### Frontend

* 
**Core**: React.js 


* 
**State Management**: Redux Toolkit 


* 
**Styling**: Tailwind CSS & Material-UI 


* 
**Forms**: React Hook Form & Zod/Joi validation 


* **UI Components**: Syncfusion (Charts, Kanban, Calendar, Editor) [client/package.json]

### Backend

* 
**Runtime**: Node.js & Express.js 


* 
**Authentication**: JWT (JSON Web Tokens) with refresh token rotation and Google OAuth 


* 
**Database**: MongoDB with Mongoose ODM 


* 
**File Handling**: Multer for processing image uploads 



### External Services

* 
**AI**: OpenAI API (for trip planning and listing generation) 


* 
**Payments**: Razorpay API 


* 
**Images**: Cloudinary (Cloud storage for vehicle photos) 


* 
**Email**: Nodemailer for booking confirmations and receipts 



---

## 📁 Project Structure

For diagrams of the system, data model, API surface and key flows, see [ARCHITECTURE.md](ARCHITECTURE.md).

```text
├── backend/
│   ├── controllers/      # Business logic for all roles
│   ├── models/           # Mongoose schemas (User, Vehicle, Booking, MasterData)
│   ├── routes/           # API endpoints (Auth, User, Admin, Vendor, AI)
│   ├── services/         # Availability and logic helpers
│   └── server.js         # Entry point and middleware configuration
├── client/               # React frontend (Vite-based)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Role-specific dashboards and views
│   │   ├── redux/        # Slices and global state logic
│   │   └── assets/       # Media and static files
└── package.json          # Server dependencies and scripts

```

---

## ⚙️ Installation & Setup

### 1. Prerequisites

* Node.js (v18+)
* MongoDB Atlas account
* Cloudinary, Razorpay, and OpenAI API keys

### 2. Clone and Install

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client
npm install

```

### 3. Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```env
PORT=3000
mongo_uri=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
RAZORPAY_KEY_ID=your_id
RAZORPAY_KEY_SECRET=your_secret
OPENAI_API_KEY=your_key

```

### 4. Running the Application

```bash
# Run backend (from root)
npm run dev

# Run frontend (from /client)
npm run dev

```

---

## 👥 Contributors

* 
**Sahilur Raheman**: Backend lead, Report 


* 
**Samkit Jain**: Frontend lead, Report 


