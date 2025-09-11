const express=require("express");
const  cors=require("cors");
const connectDB=require('./db_Connect');
const app = express();
require('dotenv').config();


// connect to DB
connectDB();



// routes
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"));
app.use("/reservation",require("./routes/reservation"))
app.use("/service",require("./routes/service"))

//server
const PORT=process.env.PORT;
app.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = app;