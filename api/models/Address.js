const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  streetAddress: String,
  unitNumber: String,
  careOfOrCompany: String,
  poBox: String,
  city: String, 
  provinceState: String,
  additionalLine: String,
  postalCode: String,
  country: String,
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;