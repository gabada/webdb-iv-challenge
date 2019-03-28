const router = require('express').Router();
const Dishes = require('./dishes-model.js');

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const dish = await Dishes.addDish(req.body);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
