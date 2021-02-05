module.exports = function (app) {
  const encryptPassword = require("../../utils/pwHashing");

  app.post("/vendor-register", (request, response) => {
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
          console.log("Salted PW", hash);

          // query to the database and get the records
          sqlRequest.query(
            `INSERT INTO Vendor (FirstName,LastName,Phone,Email,Expertise,Description,VendorName,Type_of_service,Min_service_cost,Availability,Password)
        VALUES ('${request.body.data.firstName}','${request.body.data.lastName}','${request.body.data.phone}','${request.body.data.email}','${request.body.data.expertise}','${request.body.data.description}','${request.body.data.vendorName}','${request.body.data.serviceType}','${request.body.data.minServiceFee}','NA','${hash}')`,
            (err, recordset) => {
              if (err) {
                console.log(err);
                if (err.number === 2627) {
                  response.send({
                    errorCode: 409,
                  });
                } else {
                  response.send({
                    errorCode: 500,
                  });
                }
              } else {
                // send records as a response
                response.send(recordset);
              }
            }
          );
        }
      );
    });
  });
};
