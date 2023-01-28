const bcrypt = require('bcrypt')

const Credentials = require('../models').Credentials

module.exports = {
  async add(req, res) {
    const hashedPassword = bcrypt.hashSync(req?.body?.password, 10)
    return Credentials.create({
      username: req?.body?.username,
      email: req?.body?.email,
      password: hashedPassword,
    })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error))
  },
}
