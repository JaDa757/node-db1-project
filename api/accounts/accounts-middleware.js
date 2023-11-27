exports.checkAccountPayload = (req, res, next) => {
 console.log('check account payload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log('check account unique name middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {
  console.log('check account id middleware')
  next()
}
