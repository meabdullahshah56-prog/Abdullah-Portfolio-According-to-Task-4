# Abdullah — Personal Portfolio

A full-stack personal portfolio website built with vanilla HTML/CSS/JS on the frontend and Node.js + Express on the backend.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the server
```bash
# Production
npm start

# Development (auto-restart on file changes)
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── public/               # Static frontend files
│   ├── index.html        # Main HTML page
│   ├── css/
│   │   └── style.css     # All styles
│   └── js/
│       └── main.js       # Frontend JavaScript
├── routes/
│   └── contact.js        # Contact form API route
├── server.js             # Express server entry point
├── package.json
└── README.md
```

---

## 🔧 Customization

### Update your info
Edit `public/js/main.js` — the `projects` array at the top holds all project cards.

### Update links
In `public/index.html`, update the GitHub and LinkedIn links in the footer.

### Add email sending
In `routes/contact.js`, install and configure **nodemailer** or **SendGrid** to actually send emails when someone submits the form.

```bash
npm install nodemailer
```

---

## 🌐 Deployment

Deploy to **Railway**, **Render**, or **Vercel** (with serverless functions). Make sure to set `NODE_ENV=production` and configure your PORT environment variable.

---

## ⚙️ API Endpoints

| Method | Route           | Description              |
|--------|----------------|--------------------------|
| POST   | /api/contact    | Submit a contact message |
| GET    | /api/contact    | View all messages        |
| GET    | /api/health     | Server health check      |
