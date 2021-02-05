module.exports = function (app) {
  const encryptPassword = require("../../utils/pwHashing");

  app.post("/customer-register", (request, response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body.data);

    var sql = require("mssql");

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
      var sqlRequest = new sql.Request();

      var saltedPw = encryptPassword(request.body.data.password).then(
        (hash) => {
          // query to the database and get the records
          sqlRequest.query(
            `INSERT INTO Customer (FirstName,LastName,Phone,Email,Address,Password)
        VALUES ('${request.body.data.firstName}','${request.body.data.lastName}','${request.body.data.phone}','${request.body.data.email}','${request.body.data.address}', '${hash}')`,
            function (err, recordset) {
              if (err) console.log(err);

              // send records as a response
              response.send(recordset);
            }
          );
        }
      );
    });
  });
};
