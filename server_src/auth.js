
const jwt = require("jsonwebtoken");

//@todo: replace with secret key setup
// var secret_key = process.env.SECRET_KEY;
var secret_key = "asd";

function verify_jwt(token) {
    return jwt.verify(token, secret_key);
}

function sign_jwt() {
  return jwt.sign({ id: 1, admin: 1 },
    secret_key,
    {expiresIn: "1min"});
}

module.exports.verify_jwt = verify_jwt;
module.exports.sign_jwt = sign_jwt;
exports.asd = 1;