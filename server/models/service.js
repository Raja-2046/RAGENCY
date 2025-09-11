let mongoose = require('mongoose')
let serviceSchema = new mongoose.Schema({
 icon: String,
      title: String,
      description: String,
      price: String,
      button: String,


})
const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;