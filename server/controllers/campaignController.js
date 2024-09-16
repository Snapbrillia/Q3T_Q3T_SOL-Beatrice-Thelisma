// controllers/campaignController.js
const Campaign = require('../models/campaign');
const User = require('../models/user');

// @route   POST /api/campaigns/create
// @desc    Create a new campaign
// @access  Private
const createCampaign = async (req, res) => {
    const { title, description, targetAmount, endDate } = req.body;

    try {
        // Create a new campaign
        const campaign = new Campaign({
            title,
            description,
            targetAmount,
            endDate,
            creator: req.user._id, // User is added to request by the auth middleware
        });

        await campaign.save();

        // Add the campaign to the user's campaigns array
        const user = await User.findById(req.user._id);
        user.campaigns.push(campaign._id);
        await user.save();

        res.status(201).json(campaign);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// @route   GET /api/campaigns/:id
// @desc    Get campaign by ID
// @access  Public
const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate('creator', 'name email'); // Populate creator details
        res.json(campaigns);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// @route   GET /api/campaigns/:id
// @desc    Get campaign by ID
// @access  Public
const getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id).populate('creator', 'name email');

        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        res.json(campaign);
    } catch (error) {
        console.error(error.message);

        // If error is due to an invalid ObjectId
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        res.status(500).send('Server error');
    }
};

module.exports = { createCampaign, getAllCampaigns, getCampaignById };
