/**
 * 숫자의 표현
 
 문제 설명
 Finn은 요즘 수학공부에 빠져 있습니다. 
 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 
 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

 1 + 2 + 3 + 4 + 5 = 15
 4 + 5 + 6 = 15
 7 + 8 = 15
 15 = 15
 자연수 n이 매개변수로 주어질 때, 
 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

 제한사항
 n은 10,000 이하의 자연수 입니다.

 입출력 예
 n	result
 15	4

 입출력 예 설명
 입출력 예#1
 문제의 예시와 같습니다.

 */

function solution(n) {
    let answer = 0;
    let total = 0;
    for (let ix = 1; ix <= n; ix++) {
        total = ix;
        for (let iy = ix + 1; iy <= n; iy++) {
            total += iy
            if (total >= n) {
                break;
            }
        }
        if (total === n) {
            answer++;
        }
    }
    
    return answer;
}

function expressions(num) {
    var answer = 0;

  for(var i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}

function expressions(num) {
    var answer = 0;
  var k = 0;

    while((k*(k-1)/2)<=num){
      if(Number.isInteger((num/k)-(k-1)/2) && ((num/k)-(k-1)/2 != 0)){
        answer++;
      }
      k++;
    }

    return answer;
}
