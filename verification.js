const userList = require("./users.json");

function verification(keyinData) {
  const result = userList.users.find(user => {
    return keyinData.email === user.email && keyinData.password === user.password
  });
  return result;
}

module.exports = verification;
