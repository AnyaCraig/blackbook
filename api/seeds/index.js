// SEEDS INDEX

const User = require('../models/User');
const Contact = require('../models/Contact');
const Address = require('../models/Address');
const { uri } = require('../index');

console.log("USER", User);

const users = require('./users');
const { contacts } = require('./contacts');
const { addresses } = require('./addresses');

const mongoose = require('mongoose');


// delete all current items in our database for all our entities
const truncateDatabase = async () => {
    return Promise.all([User.deleteMany(), Contact.deleteMany(), Address.deleteMany()]);
}

// populate our database with our seed data for all entities
const makeSeeds = async () => {
    
    // connect to the Mongo database
    await mongoose.connect(uri);

    // delete all the old data in the database
    await truncateDatabase();

    // save our users into the database
    await Promise.all(users.map(user => user.save()));

    // save our artists into the database
    // and all the artworks for each artist

    await Promise.all(contacts.map(contact => contact.save()));
    
    await Promise.all(addresses.map(address => address.save()));

    console.log("WE SAVED THEM ALL");
    // close the database connection
    mongoose.connection.close();
}

makeSeeds(); 