/**
 * Multiples of 3 or 5
 
 If we list all the natural numbers below 10 that are multiples of 3 or 5, 
 we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

 Note: If the number is a multiple of both 3 and 5, only count it once.
 
 */

function solution(number){
    let answer = [];
    let temp = 0;
    while(temp + 3 < number) {
      temp += 3;
      answer.push(temp);
    }
    temp = 0;
    while (temp + 5 < number) {
      temp += 5;
      if (temp % 3 !== 0) {
        answer.push(temp);
      }
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
  }