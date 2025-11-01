const express = require('express');
const router = express.Router();
const Watch = require('../models/Watch');

// Get all watches
router.get('/', async (req, res) => {
  try {
    const watches = await Watch.find({});
    res.json(watches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get watch by ID
router.get('/:id', async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return res.status(404).json({ message: 'Watch not found' });
    }
    res.json(watch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get watches by brand
router.get('/brand/:brandName', async (req, res) => {
  try {
    const watches = await Watch.find({ brand: req.params.brandName });
    res.json(watches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;