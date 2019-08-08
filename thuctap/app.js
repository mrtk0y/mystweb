const express = require("express");         // da cai
const bodyParser = require('body-parser');
const mongoose = require('mongoose');       // da cai
const session = require('express-session'); // da cai 
// const MongoStore = require('connect-mongo')(session);
const app = express();

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost:27017/weather1');
let db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));

app.use(express.urlencoded({ extended: true }));


// Route
const mainRoutes = require("./routes");
const weatherRoutes = require("./routes/weather.js");
// const registerRoutes = require("./routes/register.js");
// const userRoutes = require("./routes/users");
app.use(mainRoutes);
app.use("/weather", weatherRoutes);
// app.use("/register", registerRoutes);
// app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Sever is running now at port 3000");
});