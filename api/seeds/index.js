// SEEDS INDEX

const User = require('../models/User');
const Contact = require('../models/Contact');
const Address = require('../models/Address');

const users = require('./users');
const { contacts } = require('./contacts');
const { addresses } = require('./addresses');

// delete all current items in our database for all our entities
const truncateDatabase = async () => {
    return Promise.all([User.deleteMany(), Contact.deleteMany(), Address.deleteMany()]);
}

// populate our database with our seed data for all entities
const makeSeeds = async () => {

    // delete all the old data in the database
    await truncateDatabase();

    // save our seeds
    await Promise.all(users.map(user => user.save()));
    await Promise.all(contacts.map(contact => contact.save()));
    await Promise.all(addresses.map(address => address.save()));

    console.log("WE SAVED THEM ALL");
}

exports.makeSeeds = makeSeeds;