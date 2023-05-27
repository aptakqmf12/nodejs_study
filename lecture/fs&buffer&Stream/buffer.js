const buffer = Buffer.from("버퍼로 바꿀 데이터");
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [
  Buffer.from("A"),
  Buffer.from("B"),
  Buffer.from("C"),
  Buffer.from("D"),
];

console.log(Buffer.concat(array).toString());

console.log(Buffer.alloc(5)); //빈 버퍼 생성
