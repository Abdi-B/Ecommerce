const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser()); // Initialize cookie-parser
app.use(express.json({ limit: "1000kb" }));

// 
app.use(cors({
    origin : "http://localhost:5173/",
    methods : ['GET', 'POST','DELETE','PUT'],
    allowedHeaders : [
        "content-Type",
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials : true
}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Mongodb connected successfully & listening on the port",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));


