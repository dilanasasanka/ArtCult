// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const galleryRoutes = require('./routes/galleryRoutes');
const userRoutes = require('./routes/userRoutes'); 
const cartRoutes = require('./routes/cartRoutes'); // Import userRoutes

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://dilanasasanka:DSM2001dsm*@artcult-cluster.nyxtqzi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/gallery', galleryRoutes);
app.use('/api/user', userRoutes); // Use userRoutes for user-related endpoints
app.use('/api/cart', cartRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
