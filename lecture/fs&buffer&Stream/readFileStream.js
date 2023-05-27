const fs = require("fs");

// stream은 순서대로
// stream 처리는 비동기
// stream은 buffer에 비해 적은 메모리를 사용한다 (buffer와 다르게 짤라서 보내기 때문에)
const readStream = fs.createReadStream("./readFile.txt", { highWaterMark: 16 }); // 짤라보낼 단위

const array = [];

readStream.on("data", (chunk) => {
  console.log("chunk : ", chunk, chunk.length);
  array.push(chunk);
});

readStream.on("end", () => {
  console.log(Buffer.concat(array).toString());
});

readStream.on("error", (err) => {
  throw err;
});
