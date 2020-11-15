const JWT = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
  let { token } = req.headers
  JWT.compare(token, (err, payload) => {
    if(err) next({ msg: 'You have to login first', status: 404 })
    else {
      let { id } = payload
      User.findOne({ where: { id }})
        .then(data => {
          if(!data) throw ({ msg: 'Username/password error', status: 400})
          else {
            req.login = { id: data.id }
            next()
          }
        })
        .catch(error => {
          error.msg = error.msg || "You have to login first"
          error.status = error.status || 404
          next(error)
        })
    }
  })
}