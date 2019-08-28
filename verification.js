const userList = require("./users.json");

const users = [
  {
    firstName: "Tony",
    email: "tony@stark.com",
    password: "iamironman"
  },
  {
    firstName: "Steve",
    email: "captain@hotmail.com",
    password: "icandothisallday"
  },
  {
    firstName: "Peter",
    email: "peter@parker.com",
    password: "enajyram"
  },
  {
    firstName: "Natasha",
    email: "natasha@gamil.com",
    password: "*parol#@$!"
  },
  {
    firstName: "Nick",
    email: "nick@shield.com",
    password: "password"
  }
];

function verification(keyinData) {
  const userData = users.find(user => {
    // return user.email === keyinData.email;
    return user.email === "tony@stark.com";
  });

  if (userData.password === "iamironman") {
    return userData;
  }
}
// console.log(users[1]);
verification(users);
console.log(verification(users));

module.exports = verification;
