// routes/campaignRoutes.js
const { check } = require('express-validator');
const app = require('express');
const { getAllCampaigns, getCampaignById, createCampaign } = require('../controllers/campaignController');
const protect = require('../middleware/authMiddleware');

// Add validation for campaign creation
const router = app.Router();

router.post(
    '/create',
    protect,
    [
        check('title', 'Title is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        check('goal', 'Goal must be a positive number').isFloat({ gt: 0 })
    ],
    createCampaign
);

router.get('/', getAllCampaigns);

// Route to get a campaign by ID (public)
router.get('/:id', getCampaignById);


module.exports = router;