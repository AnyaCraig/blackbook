// ADDRESS SEEDS

const Address = require('../models/Address');

const addresses = [];

const address1 = new Address({
  streetAddress: '45 Oak Island Way',
  unitNumber: '#3',
  careOfOrCompany: null,
  poBox: null,
  city: "Arden", 
  provinceState: "Nova Scotia",
  additionalLine: null,
  postalCode: "M4R 3G6",
  country: "Canada",
});

const address2 = new Address({
  streetAddress: '60 Francis Street',
  unitNumber: null,
  careOfOrCompany: null,
  poBox: null,
  city: "Port Hope", 
  provinceState: "Ontario",
  additionalLine: null,
  postalCode: "P0H 0H0",
  country: "Canada",
});
  
const address3 = new Address({
  streetAddress: '12 Alma Street',
  unitNumber: "#231",
  careOfOrCompany: "Carolina Suites Retirement Residence",
  poBox: null,
  city: "Perth", 
  provinceState: "Ontario",
  additionalLine: null,
  postalCode: "K7H 3G6",
  country: "Canada",
});

const address4 = new Address({
  streetAddress: '566 Rathbone Terrace',
  unitNumber: '#98-B',
  careOfOrCompany: null,
  poBox: "P.O. Box 198",
  city: "Terror", 
  provinceState: "New Brunswick",
  additionalLine: "RR #4",
  postalCode: "G6H 4G3",
  country: "Canada",
});

const address5 = new Address({
  streetAddress: '66 Fairweather Way',
  unitNumber: '#277',
  careOfOrCompany: null,
  poBox: null,
  city: "Ottawa", 
  provinceState: "Ontario",
  additionalLine: null,
  postalCode: "K4N 3J8",
  country: "Canada",
});

const address6 = new Address({
  streetAddress: '89 Armitage Road',
  unitNumber: null,
  careOfOrCompany: null,
  poBox: null,
  city: "Bissett", 
  provinceState: "Manitoba",
  additionalLine: "RR #4",
  postalCode: "P6G 8D6",
  country: "Canada",
});

const address7 = new Address({
  streetAddress: '722 Willow Boulevard',
  unitNumber: '45G',
  careOfOrCompany: null,
  poBox: null,
  city: "Halloran", 
  provinceState: "Wyoming",
  additionalLine: "RR #7",
  postalCode: "50383",
  country: "United States of America",
});

addresses.push(  
  address1,
  address2,
  address3,
  address4,
  address5,
  address6,
  address7
);
  
module.exports = {
  address1,
  address2,
  address3,
  address4,
  address5,
  address6,
  address7, 
  addresses
};
