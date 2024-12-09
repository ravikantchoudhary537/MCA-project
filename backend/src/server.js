const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server!');
  });
// Routes
//app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
