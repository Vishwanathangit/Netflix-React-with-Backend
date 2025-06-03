# 🎬 Netflix Login Clone (Full Stack - Render Deployment)

A simple Netflix-style login interface built using **React + Vite** for the frontend and **Node.js + Express** for the backend. Both the **frontend and backend are deployed on Render**.

---

## 🔧 Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React, Vite, Tailwind CSS     |
| Backend   | Node.js, Express.js           |
| HTTP      | Axios                         |
| Hosting   | Render.com (Frontend & Backend) |
| Routing   | React Router DOM              |

---

## 📁 File Structure

<pre>
  ```
  netflix-login-clone/
├── backend/ # Node.js + Express backend
│ └── index.js # Backend server logic
├── frontend/ # React + Vite frontend
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ │ └── images/ # Background and logo
│ │ ├── components/
│ │ │ └── Login.jsx
│ │ ├── pages/
│ │ │ ├── Failed.jsx
│ │ │ └── Success.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── .env # (Optional) API URL
│ ├── package.json
│ └── vite.config.js
├── README.md
  ```
</pre>


---

## 🚀 Deployment Instructions (Render)

### 🔧 Backend Deployment

1. Go to [https://render.com](https://render.com)
2. Click **"New Web Service"**
3. Connect your GitHub repo and select the `backend/` folder
4. Configure the service:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Port:** `3000` (Render auto-detects)
5. Deploy
6. Copy your Render backend URL (e.g., `https://netflix-backend.onrender.com`)

---

### 🎨 Frontend Deployment

1. Go to [https://render.com](https://render.com)
2. Click **"New Web Service"**
3. Select the `frontend/` folder from your repo
4. Configure the service:
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npx serve -s dist`
   - **Publish Directory:** `dist`
5. Set Environment Variable (optional):
   - `VITE_BACKEND_URL=https://netflix-backend.onrender.com`
6. Deploy
7. Copy your frontend URL (e.g., `https://netflix-frontend.onrender.com`)

---

## 🔑 Login Details

Use the following credentials:

- **Mobile:** `1234567890`
- **Password:** `123`

If correct:
- Redirect to `/success`

If incorrect:
- Redirect to `/fail`

---


Returns:

json
true  // or false

✅ Features
Responsive UI (Tailwind)

Route-based navigation

Form validation

API integration with Axios

Login success & failure handling

📌 To Do
Add signup & forgot password pages

Replace hardcoded login with DB

Add session handling and tokens

Live Demo : [https://netflix-react-with-backend-48qs.onrender.com/]
GitHub : [https://github.com/Vishwanathangit/Netflix-React-with-Backend.git]
