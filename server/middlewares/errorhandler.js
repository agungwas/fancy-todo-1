module.exports = (err, req, res, next) => {
  console.log('\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n')
  console.log(JSON.stringify(err, null, 2))
  console.log('\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n')
  if (err.msg.name === "SequelizeValidationError") {
    err.msg = err.msg.errors.map(el => {
      return el.message
    })
  }
  if (err.msg.name === "SequelizeUniqueConstraintError") {
    err.msg = err.msg.errors[0].message
  }
  err.msg = err.msg || 'Internal server error'
  err.status = err.status || 500
  res.status(err.status).json({errorMessage: err.msg})
}