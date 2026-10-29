const ButlerRequest = require('../models/ButlerRequest');

let inMemoryButlerQueue = [
  {
    requestId: 'req-101',
    villaCode: 'Villa 104',
    guestName: 'Aman',
    requestName: 'Turndown Rose Bath',
    assignedButler: 'Kadek Suryana',
    status: 'Dispatched',
    createdAt: new Date()
  },
  {
    requestId: 'req-102',
    villaCode: 'Villa 101',
    guestName: 'Aniket',
    requestName: 'Chilled Coconut Platter',
    assignedButler: 'Wayan Arta',
    status: 'Delivered',
    createdAt: new Date()
  }
];

exports.getButlerQueue = async (req, res) => {
  res.json({ success: true, count: inMemoryButlerQueue.length, data: inMemoryButlerQueue });
};

exports.createButlerRequest = async (req, res) => {
  const { requestName, villaCode, guestName } = req.body;
  const newReq = {
    requestId: 'req-' + Date.now(),
    requestName: requestName || 'Island Buggy Dispatch',
    villaCode: villaCode || 'Villa 101',
    guestName: guestName || 'Resort Guest',
    assignedButler: 'Kadek Suryana',
    status: 'Dispatched',
    createdAt: new Date()
  };
  inMemoryButlerQueue.unshift(newReq);
  res.status(201).json({ success: true, data: newReq });
};

