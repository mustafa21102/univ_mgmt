const express = require('express');
const app = express();
const port = 3000;

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const gradeRoutes = require('./routes/gradeRoutes');

// Import error handler middleware
const errorHandler = require('./middlewares/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/grades', gradeRoutes);

// Error handling middleware (must be last, after routes)
app.use(errorHandler);

// Start the server and sync DB
const sequelize = require('./config/database');
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
