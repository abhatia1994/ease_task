require("dotenv").config();

const vendorRegister = require("./routes/vendor/register");
const customerRegister = require("./routes/customer/register");
const sendEmail = require("./routes/email/send");
const signIn = require("./routes/signIn/index");
const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

app.use(cors());

app.get("/", function (req, res) {
  var sql = require("mssql");

  console.log(process.env);
  // config for your database
  var config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
  };

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Vendor", function (err, recordset) {
      if (err) console.log(err);

      // send records as a response
      res.send(recordset);
    });
  });
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

customerRegister(app);
vendorRegister(app);
sendEmail(app);
signIn(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
