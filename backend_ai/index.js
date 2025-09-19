const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect to DB
require('./conn');

// Middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL || '*', // Allow Vercel frontend in production
  })
);

// Routes
const UserRoutes = require('./Routes/user');
const ResumeRoutes = require('./Routes/resume');

app.use('/api/user', UserRoutes);
app.use('/api/resume', ResumeRoutes);

// Default Route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running successfully ✅' });
});

// Use Render's PORT or fallback to 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
