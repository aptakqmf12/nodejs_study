const dns = require("dns");

const ip = await dns.lookup("gilbut.co.kr");
console.log(ip);
