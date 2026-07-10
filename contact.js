const express = require('express');
const router  = express.Router();

const messages = [];

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ message: 'Message must be at least 10 characters.' });
  }

  const entry = {
    id:        messages.length + 1,
    name:      name.trim(),
    email:     email.trim().toLowerCase(),
    message:   message.trim(),
    createdAt: new Date().toISOString(),
  };
  messages.push(entry);

  console.log(`\n📩 New message from ${entry.name} <${entry.email}>`);
  console.log(`   "${entry.message.substring(0, 80)}..."\n`);

  return res.status(200).json({
    success: true,
    message: 'Message received! I will get back to you soon.',
  });
});

router.get('/', (req, res) => {
  res.json({ count: messages.length, messages });
});

module.exports = router;
