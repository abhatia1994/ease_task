const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainText = "Hello World";

module.exports = function encryptPassword(plainPw) {
  return bcrypt.genSalt(saltRounds).then((salt) => {
    return bcrypt.hash(plainPw, salt).then((hash) => {
      return hash;
    });
  });
};
