const userList = require("./users.json");

function verification(keyinData) {
  // if (keyinData.remberPwd === "on") {
  // }

  const result = userList.users.find(user => {
    return (
      keyinData.email === user.email && keyinData.password === user.password
    );
  });

  if (result === undefined) {
    return true;
  } else {
    return result;
  }
}

module.exports = verification;
