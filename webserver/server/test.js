// var pg = require("pg");

// var conString = "postgres://moneypot:testpass@localhost/moneypotdb";

// var client = new pg.Client({ connectionString: conString });

// console.log("Connecting to database...");

// client.connect();
// client.query("SELECT * FROM users", function (err, result) {
//     console.log("Users: ", result.rows);
//     client.end();
// });
// const run = () => {
//     console.log("Connected to database!");

//     client.query('SELECT NOW() AS "theTime"', (err, res) => {
//         console.log(err, res);
//         client.end();
//     });

//     client.query('SELECT NOW() AS "theTime"', function (err, result) {
//         if (err) {
//             return console.error("error running query", err);
//         }
//         console.log(result.rows[0].theTime);
//         //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//         client.end();
//     });
// };

// client.connect(conString, function (err) {
//     console.log("Connected to database");
//     if (err) {
//         return console.error("could not connect to postgres", err);
//     }
//     client.query('SELECT NOW() AS "theTime"', function (err, result) {
//         if (err) {
//             return console.error("error running query", err);
//         }
//         console.log(result.rows[0].theTime);
//         //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//         client.end();
//     });
// });

const { Pool, Client } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "moneypotdb",
    password: "8873",
    port: 5432,
});
pool.query("SELECT COUNT(*) count FROM users;", [], (err, res) => {
    console.log(err, res);
    pool.end();
});

// var pg = require("pg");
// var conString = "postgres://postgres:8873@localhost/moneypotdb";

// //this initializes a connection pool
// //it will keep idle connections open for a (configurable) 30 seconds
// //and set a limit of 20 (also configurable)
// pg.connect(conString, function (err, client, done) {
//     if (err) {
//         return console.error("error fetching client from pool", err);
//     }
//     client.query("SELECT $1::int AS number", ["1"], function (err, result) {
//         //call `done()` to release the client back to the pool
//         done();

//         if (err) {
//             return console.error("error running query", err);
//         }
//         console.log(result.rows[0].number);
//         //output: 1
//     });
// });
