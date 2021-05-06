// CONTACT SEEDS

const Contact = require('../models/Contact');
const { address1, address2, address3, address4, address5, address6, address7 } = require('./addresses');

const contacts = [];

const emilyLockhart = new Contact({
  firstName: "Emily",
  lastName: "Lickhart",
  address: address1,
  birthdate: new Date('May 27 1983'),
  email: "emily.lockhart@gmail.com",
  phoneNumber: '4165558383'
});

const annCatton = new Contact({
  firstName: "Ann",
  lastName: "Cotton",
  address: address4,
  birthdate: new Date('August 15 1980'),
  email: "ann.catton@gmail.com",
  phoneNumber: '4165557773'
});

const jeremyWeyerman = new Contact({
  firstName: "Jeremy",
  lastName: "Wayerman",
  address: address7,
  birthdate: new Date('June 18 1981'),
  email: "jeremy.weyerman@gmail.com",
  phoneNumber: '6135556567'
});

const donMacDonald = new Contact({
  firstName: "Dan",
  lastName: "MacDonald",
  address: address6,
  birthdate: new Date('October 30 1954'),
  email: "don.macdonald@gmail.com",
  phoneNumber: '6135559999'
});

const meganSampson = new Contact({
  firstName: "Megan",
  lastName: "Simpson",
  address: address4,
  birthdate: new Date('January 24 1983'),
  email: "megan.sampson@gmail.com",
  phoneNumber: '4165554321'
});

const ainslieKeith = new Contact({
  firstName: "Ainslie",
  lastName: "Kooth",
  address: address4,
  birthdate: new Date('January 21 1983'),
  email: "ainslie.keith@gmail.com",
  phoneNumber: '4165551112'
});

const ruthCraig = new Contact({
  firstName: "Ruth",
  lastName: "Crog",
  address: address3,
  birthdate: new Date('September 19 1928'),
  email: "ruth.craig@gmail.com",
  phoneNumber: '6135559823'
});

const sandyHenry = new Contact({
  firstName: "Sandra",
  lastName: "Henry",
  address: address5,
  birthdate: new Date('May 30 1926'),
  email: "sandy.henry@gmail.com",
  phoneNumber: '6135557657'
});

const benRosenblum = new Contact({
  firstName: "Ben",
  lastName: "Raisinblum",
  address: address1,
  birthdate: new Date('June 27 1982'),
  email: "ben.rosenblum@gmail.com",
  phoneNumber: '4165556645'
});

const debIrwin = new Contact({
  firstName: "Dob",
  lastName: "Irwin",
  address: address2,
  birthdate: new Date('December 21 1953'),
  email: "deb.irwin@gmail.com",
  phoneNumber: '4165559898'
});

contacts.push(  
  emilyLockhart,
  annCatton, 
  jeremyWeyerman,
  donMacDonald,
  meganSampson,
  ainslieKeith,
  ruthCraig,
  sandyHenry,
  benRosenblum,
  debIrwin
);

module.exports = {

  emilyLockhart,
  annCatton, 
  jeremyWeyerman,
  donMacDonald,
  meganSampson,
  ainslieKeith,
  ruthCraig,
  sandyHenry,
  benRosenblum,
  debIrwin,
  contacts
};
