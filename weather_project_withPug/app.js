const express = require("express");
// const cookieParser = require('cookie-parser');
const path = require("path");
const app = express();
var mongoose = require('mongoose')

//mongo connection
mongoose.connect('mongodb://localhost:27017/weatherapp');
var db= mongoose.connection;

//mongo error
db.on('error', console.error.bind(console, 'connection error : '));


app.use(express.static(path.join(__dirname, "views")));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.set("view engine", "pug");

const mainRoutes = require("./routes");
const weatherRoutes = require("./routes/weather");
const registerRoutes = require("./routes/register");
const userRoutes = require("./routes/users");

app.use(mainRoutes);
app.use("/weather", weatherRoutes);
app.use("/register", registerRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Sever is running now at port 3000");
});
