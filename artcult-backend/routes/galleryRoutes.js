// routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const GalleryItem = require('../models/GalleryItem');

// Get all gallery items
router.get('/', async (req, res) => {
  try {
    const galleryItems = await GalleryItem.find();
    res.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific gallery item by ID
router.get('/:id', async (req, res) => {
  try {
    const galleryItem = await GalleryItem.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new gallery item
router.post('/', async (req, res) => {
  try {
    const galleryItem = new GalleryItem(req.body);
    const savedGalleryItem = await galleryItem.save();
    res.json(savedGalleryItem);
  } catch (error) {
    console.error('Error creating gallery item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a gallery item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedGalleryItem = await GalleryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedGalleryItem);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a gallery item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedGalleryItem = await GalleryItem.findByIdAndDelete(req.params.id);
    if (!deletedGalleryItem) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    res.json(deletedGalleryItem);
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
