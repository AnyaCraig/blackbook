const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  birthdate: Date,
  email: String,
  phoneNumber: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;