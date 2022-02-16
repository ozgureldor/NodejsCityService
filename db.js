 
var mariadb = require('mariadb');
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host: "45.100.120.78", 
    port: 3306,
    user: "sigal", 
    password: "8hRE+zpyLk",
    database: "world"
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});