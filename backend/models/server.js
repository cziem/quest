const mongoose = require("mongoose"),
     express = require("express"),
     bodyParser = require("body-parser"),
     schemas = require("./schema"),
     UserSchema = require("./user"),
     users = require('../routes/users'),
     auth = require('../routes/auth');

const port = process.env.PORT || 3300;
const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");

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

// app.post("/registration/user", (req, res) => {
//   let data = req.body
//   console.log(`The request message is ${JSON.stringify(data)}`);

//   if (!data) {
//     res.json({ message: "empty" });
//   } else {
//     new UserSchema.User({
//       name: data.name,
//       username: data.username,
//       email: data.email,
//       password: data.password
//     })
//       .save()
//       .then(resp => {
//          if (resp) {
//           console.log(resp)
//           res.json({ message: 'Saved Successfully' })
//         }
//       });
//   }
// });

// For Routes
app.use('/users', auth)
app.use('/registration', users)

app.listen(port, () => console.log(`Server is running on port ${port}`));
