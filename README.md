# 🧠 ThinkBoard  

A modern and interactive idea management app built with the **MERN stack**. Create, update, organize, and delete your thoughts on a clean, DaisyUI-powered interface — all while enjoying smooth performance and secure rate-limited APIs.  

## 🚀 Live Demo  
👉 [Click here to try it out](https://think-board-soham.vercel.app/)  

---

## ✨ Features  

- 📝 **CRUD Operations** — Create, Read, Update, and Delete notes/boards easily  
- ⏳ **Rate Limiting** — Secure API with request limiting  
- 🎨 **DaisyUI + TailwindCSS** — Modern and responsive design  
- 📂 **Organized Boards** — Keep your thoughts structured  
- ⚡ **REST API Backend** — Efficient and scalable Express API  
- 📱 **Responsive UI** — Works smoothly on mobile & desktop  

---

## 🛠️ Tech Stack  

- **Frontend:** React 18, DaisyUI, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose  
- **Deployment:** Vercel (Frontend) & Render (Backend)  

---

## 📦 Installation (Local Setup)  

```bash
# Clone repository
git clone https://github.com/your-username/thinkboard.git
cd thinkboard

# Backend Setup
cd backend
npm install

# Create .env file in /backend with:
# MONGO_URI=your_mongodb_connection_string
# PORT=3000
npm start

# Frontend Setup
cd ../frontend
npm install

# Create .env file in /frontend with:
# VITE_API_URL=http://localhost:3000/api
npm run dev
