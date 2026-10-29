const express = require('express');
const router = express.Router();
const butlerController = require('../controllers/butlerController');

router.get('/', butlerController.getButlerQueue);
router.post('/requests', butlerController.createButlerRequest);

module.exports = router;

