const mongoose = require("mongoose"),
  schemas = require("./schema"),
  express = require("express"),
  bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    return res.end();
  }
  next();
});

const options = { useNewUrlParser: true };
mongoose
  .connect(
    "mongodb://localhost/Validator",
    options
  )
  .then(() => console.log("Mongoose connection successful..."))
  .catch(err => console.log("sorry, couldn't connect to the database", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/server", (req, res) => {
  let message = req.body.message;
  console.log(message);

  if (!message) {
    res.json({ message: "empty" });
  } else {
    new schemas.Message({
      message
    })
      .save()
      .then(resp => res.json({
        message: 'Saved Successfully'
      }));
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
