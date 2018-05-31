var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  User.findByToken(token).then((user) => {
    if(!user){
      return Promise.reject();
    }
    res.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  })
};

module.exports = {authenticate};
