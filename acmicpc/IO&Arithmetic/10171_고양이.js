/**
 * cat
 
 문제
 아래 예제와 같이 고양이를 출력하시오.

 입력
 없음.

 출력
 고양이를 출력한다.

 예제 입력 1 
 예제 출력 1 
 \    /\
  )  ( ')
 (  /  )
  \(__)|
 
 */

var cat = [
    "\\    /\\",
    " )  ( ')",
    "(  /  )",
    " \\(__)|"];

for(var ix = 0, ixLen = cat.length; ix < ixLen; ix++) {
    console.log(cat[ix]);
}