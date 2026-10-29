const Villa = require('../models/Villa');

// Default fallback data for zero-dependency execution
const mockVillas = [
  { id: 'villa-1', villaCode: 'V-101', title: 'Royal Overwater Sunset Villa', category: 'overwater', categoryLabel: 'Overwater Sanctuary', pricePerNight: 48000, status: 'Prepared & Available' },
  { id: 'villa-2', villaCode: 'V-102', title: 'Ocean Horizon Lagoon Bungalow', category: 'overwater', categoryLabel: 'Overwater Sanctuary', pricePerNight: 42000, status: 'Occupied' },
  { id: 'villa-3', villaCode: 'V-103', title: 'Beachfront Plunge Pool Pavilion', category: 'beach', categoryLabel: 'Beachfront Villa', pricePerNight: 36000, status: 'Prepared & Available' },
  { id: 'villa-4', villaCode: 'V-104', title: 'Ayurvedic Bamboo Spa Haven', category: 'spa', categoryLabel: 'Wellness Retreat', pricePerNight: 39500, status: 'Turn-down in Progress' },
  { id: 'villa-5', villaCode: 'V-105', title: 'The Grand Island Presidential Reserve', category: 'presidential', categoryLabel: 'Presidential Estate', pricePerNight: 95000, status: 'Prepared & Available' },
  { id: 'villa-6', villaCode: 'V-106', title: 'Cliffside Emerald Spa Villa', category: 'spa', categoryLabel: 'Wellness Retreat', pricePerNight: 44000, status: 'Deep Cleansed' }
];

exports.getAllVillas = async (req, res) => {
  try {
    const villas = await Villa.find();
    if (villas && villas.length > 0) {
      return res.json({ success: true, count: villas.length, data: villas });
    }
    return res.json({ success: true, count: mockVillas.length, data: mockVillas });
  } catch (error) {
    return res.json({ success: true, count: mockVillas.length, data: mockVillas });
  }
};

exports.getVillaByCode = async (req, res) => {
  try {
    const villa = await Villa.findOne({ villaCode: req.params.code });
    if (villa) return res.json({ success: true, data: villa });
    const mock = mockVillas.find(v => v.villaCode.toLowerCase() === req.params.code.toLowerCase());
    if (mock) return res.json({ success: true, data: mock });
    return res.status(404).json({ success: false, message: 'Villa not found' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

