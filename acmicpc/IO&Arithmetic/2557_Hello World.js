/**
 * Hello World 성공
 
 문제
 Hello World!를 출력하시오.

 입력
 없음

 출력
 Hello World!를 출력하시오.

 예제 입력 1 
 예제 출력 1 
 Hello World!
 
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    console.log("Hello World!");
    process.exit();
  });