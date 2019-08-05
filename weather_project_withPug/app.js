const express = require("express");
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "views")));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.set("view engine", "pug");

const mainRoutes = require("./routes");
const weatherRoutes = require("./routes/weather");
const autheticationRoutes = require("./routes/authentication");
const userRoutes = require("./routes/users");

app.use(mainRoutes);
app.use("/weather", weatherRoutes);
app.use("/login", autheticationRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Sever is running now at port 3000");
});
