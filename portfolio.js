const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const profile = {
  name: 'Abdullah',
  role: 'Computer Science Student & Developer',
  bio: 'I build accessible web experiences and practical software solutions with a focus on clean code, thoughtful UX, and real-world problem solving.',
  highlights: 'I enjoy turning ideas into polished products with strong foundations in algorithms, web development, and machine learning.',
  location: 'Pakistan 🇵🇰',
  status: 'Open to work',
  stats: [
    { value: '3', label: 'ML projects built' },
    { value: '5', label: 'Web projects built' }
  ],
  image: '/uploads/profile-placeholder.png'
};

const skills = [
  { name: 'JavaScript (ES6+)', level: 85, icon: '⚡' },
  { name: 'Node.js / Express', level: 80, icon: '🟢' },
  { name: 'Python / Scikit-learn', level: 78, icon: '🐍' },
  { name: 'HTML5 / CSS3', level: 90, icon: '🎨' },
  { name: 'Java / OOP', level: 70, icon: '☕' },
  { name: 'Git / GitHub', level: 82, icon: '🧰' }
];

const projects = [
  {
    title: 'Customer Segmentation ML',
    category: 'Data Analysis',
    description: 'A machine learning workflow that turns raw customer data into actionable marketing segments using clear model evaluation and visual storytelling.',
    longDescription: 'The project combined exploratory analysis, feature engineering, and several classification models to identify buying patterns, then packaged the result into a simple report and notebook workflow.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80'
    ]
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description: 'A refined portfolio experience with a polished interface, theme switching, and a Node.js/Express backend for contact handling.',
    longDescription: 'This project focused on user experience and maintainability, pairing an elegant frontend with a lightweight API and accessible interactions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Express'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    ]
  },
  {
    title: 'Java OOP Library System',
    category: 'Other',
    description: 'A modular library management system that uses inheritance, interfaces, and file handling to model real-world records.',
    longDescription: 'The system covers user accounts, inventory tracking, borrowing rules, and error handling in a structured object-oriented design.',
    technologies: ['Java', 'OOP', 'File I/O'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    screenshots: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80']
  },
  {
    title: 'Neural Network From Scratch',
    category: 'Data Analysis',
    description: 'A custom neural network built with NumPy that demonstrates forward propagation, backpropagation, and activation tuning from the ground up.',
    longDescription: 'This deep learning exercise focused on understanding the mechanics behind gradient-based optimization rather than relying on a framework.',
    technologies: ['Python', 'NumPy', 'Neural Networks'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    screenshots: ['https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80']
  },
  {
    title: 'Data Viz Dashboard',
    category: 'UI/UX Design',
    description: 'An interactive dashboard that lets users explore tabular data through filters, charts, and quick summaries.',
    longDescription: 'The interface prioritizes clarity, responsive layout, and thoughtful interactions so analysis feels approachable and fast.',
    technologies: ['JavaScript', 'Chart.js', 'CSS Grid'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    screenshots: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80']
  },
  {
    title: 'Auth REST API',
    category: 'Web Development',
    description: 'A secure REST API with JWT auth, password hashing, and role-based access controls for professional applications.',
    longDescription: 'The backend includes validation, middleware, and structured error handling so the API remains reliable under real-world use.',
    technologies: ['Node.js', 'Express', 'JWT', 'bcrypt'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    screenshots: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80']
  }
];

const contactInfo = {
  email: 'abdullah@example.com',
  phone: '+92 300 1234567',
  location: 'Islamabad, Pakistan',
  availability: 'Available for freelance and internship opportunities',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname) || '.png';
    cb(null, `${file.fieldname}-${timestamp}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Only image files are allowed.'));
      return;
    }
    cb(null, true);
  }
});

router.get('/profile', (req, res) => {
  res.json({ success: true, profile });
});

router.get('/skills', (req, res) => {
  res.json({ success: true, skills });
});

router.get('/projects', (req, res) => {
  const search = String(req.query.search || '').trim().toLowerCase();
  const category = String(req.query.category || 'All').trim();
  const technology = String(req.query.technology || 'All').trim();
  const page = Math.max(1, parseInt(req.query.page || '1', 10));
  const limit = Math.min(12, Math.max(1, parseInt(req.query.limit || '6', 10)));

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = !search || [project.title, project.description, project.category, ...(project.technologies || [])]
      .join(' ')
      .toLowerCase()
      .includes(search);
    const matchesCategory = category === 'All' || project.category === category;
    const matchesTechnology = technology === 'All' || (project.technologies || []).includes(technology);
    return matchesSearch && matchesCategory && matchesTechnology;
  });

  const totalItems = filteredProjects.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * limit;
  const pagedProjects = filteredProjects.slice(startIndex, startIndex + limit);

  res.json({
    success: true,
    projects: pagedProjects,
    pagination: {
      page: safePage,
      limit,
      totalItems,
      totalPages,
      hasNext: safePage < totalPages,
      hasPrev: safePage > 1
    },
    categories: [...new Set(projects.map((project) => project.category))],
    technologies: [...new Set(projects.flatMap((project) => project.technologies || []))]
  });
});

router.get('/contact-info', (req, res) => {
  res.json({ success: true, contactInfo });
});

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No image file provided.' });
  }

  const imageUrl = `/uploads/${req.file.filename}`;
  return res.json({ success: true, url: imageUrl });
});

router.get('/docs', (req, res) => {
  res.json({
    success: true,
    title: 'Portfolio API documentation',
    endpoints: [
      { method: 'GET', path: '/api/profile', description: 'Fetch the profile summary' },
      { method: 'GET', path: '/api/skills', description: 'Fetch skills and experience levels' },
      { method: 'GET', path: '/api/projects', description: 'Search, filter, and paginate projects' },
      { method: 'GET', path: '/api/contact-info', description: 'Fetch public contact details' },
      { method: 'POST', path: '/api/upload', description: 'Upload an image and receive a public URL' },
      { method: 'POST', path: '/api/contact', description: 'Submit a contact form message' }
    ]
  });
});

module.exports = router;
