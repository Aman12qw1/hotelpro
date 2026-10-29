const User = require('../models/User');

const demoUsers = [
  { id: 'usr-1', name: 'Aman (Guest)', email: 'aman@hotelpro.resort', role: 'guest' },
  { id: 'usr-2', name: 'Kadek Suryana (Lead Butler)', email: 'butler@hotelpro.resort', role: 'butler' },
  { id: 'usr-3', name: 'General Manager (Admin)', email: 'gm@hotelpro.resort', role: 'admin' }
];

exports.login = async (req, res) => {
  const { email, role } = req.body;
  const user = demoUsers.find(u => (email && u.email === email) || (role && u.role === role)) || demoUsers[0];
  res.json({
    success: true,
    token: 'jwt-resort-auth-token-' + Date.now(),
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      assignedIsland: 'Baa Atoll Sanctuary Island'
    }
  });
};

exports.getProfile = async (req, res) => {
  res.json({ success: true, user: demoUsers[0] });
};

