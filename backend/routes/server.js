const mongoose = require("mongoose"),
     express = require("express"),
     bodyParser = require("body-parser"),
    //  schemas = require("./models/schema"),
    //  UserSchema = require("./models/user"),
     registration = require('./registration'),
     users = require('./users'),
     auth = require('./auth');

const port = process.env.PORT || 3001;
const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
  res.header("Acces-Control-Expose-Headers", "x-auth-token")

  if (req.method === "OPTIONS") {
    return res.end();
  }
  next();
});

// Connect mongoose to DB
const options = { useNewUrlParser: true };
mongoose
  .connect(
    "mongodb://localhost/Quest",
    options
  )
  .then(() => console.log("Mongoose connection successful..."))
  .catch(err => console.log("sorry, couldn't connect to the database", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Routes
app.use('/users', users)
app.use('/auth', auth)
app.use('/registration', registration)

app.listen(port, () => console.log(`Server is running on port ${port}`));
