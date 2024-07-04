const bcryptjs = require("bcryptjs");

const genSalt = async () => {
  return await bcryptjs.genSalt();
};

const hashPassword = async (password, salt) => {
  return await bcryptjs.hash(password, salt);
};

module.exports = { genSalt, hashPassword };
