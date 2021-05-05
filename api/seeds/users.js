// USERS SEEDS

const User = require('../models/User');

const users = [];

const anya = new User({
  firstName: "Anya",
  lastName: "Craig"
});

const owen = new User({
  firstName: "Owen",
  lastName: "Craig"
});

users.push(anya, owen);

console.log("USERS", users);

module.exports = users;