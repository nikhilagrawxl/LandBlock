var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
})

module.exports = mongoose.model('users', userSchema)
//  const collection= new mongoose.model('user', userSchema)

//  data={
//   name:"Aryan",
//   email: "abc@gmail.com",
//   contact: "1234567890",
//   address: "satna",
//   city: "satna",
//   postalCode: "20103212",
// }

// collection.insertMany(data);