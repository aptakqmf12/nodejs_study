const os = require("os");
const path = require("path");
const dns = require("dns/promises");
const fs = require("fs").promises;

// 이렇게하면 4개의 작업이 묶음으로 백그라운드로 넘어가서 비동기 처리가됨.
// 만약 이 파일을 10번 실행한다면 10개의 작업들이 백그라운드로 넘어가서 순차적으로 실행됨.
async function readFiles() {
  let res = await fs.readFile("./reademe.txt");
  console.log("1번", res.toString());
  res = await fs.readFile("./reademe.txt");
  console.log("2번", res.toString());
  res = await fs.readFile("./reademe.txt");
  console.log("3번", res.toString());
  res = await fs.readFile("./reademe.txt");
  console.log("4번", res.toString());
}

readFiles();
