const express = require('express');
const router = express.Router();
const villaController = require('../controllers/villaController');

router.get('/', villaController.getAllVillas);
router.get('/:code', villaController.getVillaByCode);

module.exports = router;

