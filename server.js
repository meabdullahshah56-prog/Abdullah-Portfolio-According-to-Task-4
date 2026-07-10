const express = require('express');
const path = require('path');
const cors = require('cors');

const contactRoute = require('./contact');
const portfolioRoute = require('./portfolio');
const errorHandler = require('./error-handler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/contact', contactRoute);
app.use('/api', portfolioRoute);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio server running 🚀' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n Portfolio running at http://localhost:${PORT}\n`);
  });
}

module.exports = app;
