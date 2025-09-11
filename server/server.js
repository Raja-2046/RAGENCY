require('dotenv').config();
const app = require("./index");

app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));
