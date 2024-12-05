const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyparser = require('body-parser');
const connectDb = require('./Database/mongoDb')
const app =express();

app.use(cors());
app.use(bodyparser.json());
connectDb();

app.get("/use", (req, res) => {
    res.status(200).json({ message: "user service" });
  });


app.listen(process.env.port, () =>{
   try {
    console.log(`Server Started on port ${process.env.port}`);
   } catch (error) {
     console.error('Server not Started', error)
   }
});