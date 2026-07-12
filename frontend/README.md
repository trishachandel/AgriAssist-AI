# 🌱 AgriAssist AI

An AI-powered Crop Advisory System that helps farmers and agricultural enthusiasts by providing crop recommendations, disease guidance, irrigation information, and AI-powered agricultural assistance.

---

## 📌 Features

- 🌾 Crop Information Management
- 🤖 AI Crop Advisor using Google Gemini
- 🔍 Crop Search Functionality
- 📊 Interactive Dashboard
- 📈 Crop Statistics
- 🌤 Weather Widget
- 🌱 Recent Crops Section
- 🌙 Dark Mode Support
- 📱 Responsive Design
- 🗄 MongoDB Database Integration
- ⚡ RESTful APIs with Express.js

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Google Gemini API

---

## 📂 Project Structure

```
AgriAssist AI
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── context
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── data
│   ├── seed.js
│   └── server.js
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/trishachandel/AgriAssist-AI.git
```

### Backend

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Run

```bash
node server.js
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### Crop APIs

| Method | Endpoint |
|---------|----------|
| GET | /api/crops |
| GET | /api/crops/:id |
| GET | /api/crops/search?q= |
| POST | /api/crops |
| PUT | /api/crops/:id |
| DELETE | /api/crops/:id |

### AI API

| Method | Endpoint |
|---------|----------|
| POST | /api/chat |

---

## 🗄 Database

MongoDB with Mongoose ODM is used to store crop information.

Schema fields include:

- Name
- Disease
- Irrigation
- Season
- Soil
- Fertilizer
- Description

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Dashboard
- AI Chat
- Crop Search
- MongoDB CRUD

---

## 🚀 Future Enhancements

- JWT Authentication
- Disease Detection using Images
- Weather API Integration
- Crop Recommendation Engine
- Farmer Login Portal
- Deployment on Vercel & Render

---

## 👩‍💻 Author

**Trisha Chandel**

AI Assisted Full Stack Development Intern

Graphic Era University