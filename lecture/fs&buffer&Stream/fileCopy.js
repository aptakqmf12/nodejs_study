const fs = require("fs").promises;

fs.copyFile("./readFile.txt", "./copiedFile.txt").then(() => {
  console.log("복사완료");
});
