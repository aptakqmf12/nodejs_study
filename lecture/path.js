const path = require("path");

console.log(path.join(__dirname, "/var.js"));
console.log(path.resolve(__dirname, "/var.js")); // resolve는 "/"가 있으면 짤라버림
