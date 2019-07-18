/**
 * 가장 큰 정사각형 찾기
 
 문제 설명
 1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 
 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. 
 (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

 예를 들어

 1	2	3	4
 0	1	1	1
 1	1	1	1
 1	1	1	1
 0	0	1	0
 가 있다면 가장 큰 정사각형은

 1	2	3	4
 0	1	1	1
 1	1	1	1
 1	1	1	1
 0	0	1	0
 가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.

 제한사항
 표(board)는 2차원 배열로 주어집니다.
 표(board)의 행(row)의 크기 : 1,000 이하의 자연수
 표(board)의 열(column)의 크기 : 1,000 이하의 자연수
 표(board)의 값은 1또는 0으로만 이루어져 있습니다.

 입출력 예
 board	answer
 [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]	9
 [[0,0,1,1],[1,1,1,1]]	4

 입출력 예 설명
 입출력 예 #1
 위의 예시와 같습니다.

 입출력 예 #2
 | 0 | 0 | 1 | 1 |
 | 1 | 1 | 1 | 1 | 
 로 가장 큰 정사각형의 넓이는 4가 되므로 4를 return합니다.
 
 */

function solution(board)
{
    for (let ix = 1, ixLen = board.length; ix < ixLen; ix++) {
        for (let iy = 1, iyLen = board[ix].length; iy < iyLen; iy++) {
            if (board[ix][iy] === 0)
                continue;
            if (board[ix][iy - 1] > 0 && board[ix - 1][iy] > 0 && board[ix - 1][iy - 1] > 0) {
                board[ix][iy] = Math.min(board[ix][iy - 1], board[ix - 1][iy], board[ix - 1][iy - 1]) + 1;
            }
        }
    }

    let max = Math.max(...board.map(v => Math.max(...v)));
    return max * max;
}

function solution(board)
{    
    for (let ix = 1, ixLen = board.length; ix < ixLen; ix++) {
        for (let iy = 1, iyLen = board[ix].length; iy < iyLen; iy++) {
            if (board[ix][iy] === 0)
                continue;
            
            board[ix][iy] = Math.min(board[ix][iy - 1], board[ix - 1][iy], board[ix - 1][iy - 1]) + 1;
        }
    }

    let max = Math.max(...board.map(v => Math.max(...v)));
    return max * max;
}

// console.log(solution([
// 	[1,1,1,1,1],
// 	[1,1,1,1,1],
// 	[1,1,0,1,1],
// 	[1,1,1,1,1],
//     [1,1,1,1,1],
// ]));