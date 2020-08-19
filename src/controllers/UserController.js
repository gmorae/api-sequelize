const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id)

    return res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const { name, email } = await user.update(req.body);

    return res.status(200).json({ id, name, email });

  },

  async destroy(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const { name, email } = await user.destroy({ where: id })

    return res.json({ id, name, email });
  },
};