const fs = require("fs");

const writeStream = fs.createWriteStream("./writeFile.txt");

writeStream.on("finish", () => {
  console.log("파일쓰기 완료");
});

writeStream.write("1333 \n");
writeStream.write("2222 \n");

writeStream.end();
