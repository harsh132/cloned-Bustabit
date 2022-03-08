var pg = require("pg");
var config = require("../config/config");
var databaseUrl = config.DATABASE_URL;
console.log("DATABASE_URL: ", databaseUrl);

var client = new pg.Client(databaseUrl);
client.connect(function (err) {
    console.log("Connected to database");
    if (err) {
        return console.error("could not connect to postgres", err);
    }
    client.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
            return console.error("error running query", err);
        }
        console.log(result.rows[0].theTime);
        //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
        client.end();
    });
});
