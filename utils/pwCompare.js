module.exports = function comparePw(inputPW, dbPwHash) {
  return bcrypt.compare(loginPasswordString, hash).then((result) => {
    console.log(result);
    return result;
    // This will be either true or false, based on if the string
    // matches or not.
  });
};
