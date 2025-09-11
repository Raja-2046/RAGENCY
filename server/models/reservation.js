let mongoose = require('mongoose')
let reservationSchema = new mongoose.Schema({
   name:String,
      surname:String,
      email:String,
      number:String,
      info:String,
      packname:String,
      price:String,
      date:String,
      status:{
         type: Boolean,
         default: false,
      },

})
const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;