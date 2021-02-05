const e = require("express");

module.exports = function (app) {
  const encryptPassword = require("../../utils/pwHashing");

  app.post("/signin", (request, response) => {
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
      sqlRequest.query(
        `SELECT * FROM Customer Where Email='${request.body.data.email}'`,
        function (err, recordset) {
          if (err) console.log(err);

          if (recordset.recordset.length === 0) {
            console.log("Log not found in Customer, checking Vendor");
            sqlRequest.query(
              `SELECT * FROM Vendor Where Email='${request.body.data.email}'`,
              function () {
                if (err) console.log(err);
                else {
                  if (recordset.recordset.length === 0) {
                    console.log(
                      "Log not found in Vendor as well",
                      request.body.data.email
                    );
                  } else {
                    console.log("log Found in vendor");
                    response.send(recordset.recordset);
                  }
                }
              }
            );
          } else {
            // send records as a response
            response.send(recordset.recordset);
          }
        }
      );
    });
  });
};
