// models/GalleryItem.js
const mongoose = require('mongoose');

const galleryItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Store image URLs for simplicity
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const GalleryItem = mongoose.model('GalleryItem', galleryItemSchema);

module.exports = GalleryItem;
