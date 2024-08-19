// routes/cartRoutes.js
const express = require('express');
const CartItem = require('../models/CartItem');
const router = express.Router();

// Get all cart items for the logged-in user
router.get('/', async (req, res) => {
  try {
    const userId = req.user.userId;
    const cartItems = await CartItem.find({ user: userId }).populate('galleryItem');
    const orderSummary = calculateOrderSummary(cartItems);
    res.json({ cartItems, orderSummary });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add an item to the cart
router.post('/', async (req, res) => {
  try {
    const { galleryItemId } = req.body;
    const userId = req.user.userId;
    console.log(galleryItemId);
    console.log(userId);

    const newCartItem = new CartItem({
      user: userId,
      galleryItem: galleryItemId,
    });

    await newCartItem.save();

    res.status(201).json({ message: 'Item added to the cart successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an item from the cart
router.delete('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    await CartItem.findByIdAndDelete(itemId);
    res.json({ message: 'Item removed from the cart successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Helper function to calculate order summary
const calculateOrderSummary = (cartItems) => {
  let subtotal = 0;

  cartItems.forEach((item) => {
    subtotal += item.galleryItem.price;
  });

  const shippingCost = 10; // You can adjust this based on your business logic
  const estimatedTotal = subtotal + shippingCost;

  return {
    subtotal,
    shippingCost,
    estimatedTotal,
  };
};

module.exports = router;
