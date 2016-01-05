var mysql = require("mysql");
var request = require("request");


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
});

// dbConnection.connect();

dbConnection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

dbConnection.query('USE chat');
