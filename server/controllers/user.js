const { User } = require('../models')
const Bcrypt = require('../helpers/bcrypt')
const JWT = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

module.exports = class UserController {
  static async register(req, res, next) {
    try {
      let { email, password } = req.body
      console.log('sampai register', email, password)
      let created = await User.create({email, password}, { returning: true })
      res.status(201).json({ message: `User with e-mail ${created.email} registered successfully`})
    } catch (err) {
      next({ msg: err, status: 400 })
    }
  }
  static async login(req, res, next) {
    try {
      let { email, password } = req.body
      email = email.toLowerCase()
      let user = await User.findOne({ where: { email }})
      if(!user) throw {msg: `Username/Password error`, status: 400}
      else if(user) {
        let hasil = Bcrypt.compare(password, user.password)
        if(!hasil) throw {msg: `Username/Password error`, status: 400}
        else {
          let token = JWT.create({
            id: user.id,
            email: user.email
          })
          res.status(200).json({ token })
        }
      }
    } catch (err) {
      next(err)
    }
  }
  static async googleLogin(req, res, next) {
    try {
      const client = new OAuth2Client(process.env.CLIENT_ID);
      const { token } = req.body
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const user = await User.findOne({ where: { email: payload.email }})
      if(!user) {
        const newUser = await User.create({ email: payload.email, password: "terserah" })
        console.log(newUser)
        const token = JWT.create({
          id: newUser.id, email: newUser.email
        })
        res.status(200).json({ token })
      } else {
        const token = JWT.create({ 
          id: user.id, email: user.email
        })
        res.status(200).json({ token })
      }
    } catch (error) {
      next(error)
    }
  }
}