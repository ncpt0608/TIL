/**
 * 위장
 
 문제 설명
 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 
 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

 종류	이름
 얼굴	동그란 안경, 검정 선글라스
 상의	파란색 티셔츠
 하의	청바지
 겉옷	긴 코트
 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

 제한사항
 clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
 같은 이름을 가진 의상은 존재하지 않습니다.
 clothes의 모든 원소는 문자열로 이루어져 있습니다.
 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
 스파이는 하루에 최소 한 개의 의상은 입습니다.

 입출력 예
 clothes	return
 [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	5
 [[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]	3

 입출력 예 설명
 예제 #1
 headgear에 해당하는 의상이 yellowhat, greenturban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
 1. yellow_hat
 2. blue_sunglasses
 3. green_turban
 4. yellow_hat + blue_sunglasses
 5. green_turban + blue_sunglasses
 
 예제 #2
 face에 해당하는 의상이 crowmask, bluesunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.
 1. crow_mask
 2. blue_sunglasses
 3. smoky_makeup
 
 */

function solution(clothes) {
    let answer = 1;
    const objClothes = {};
    
    for (let ix = 0, ixLen = clothes.length; ix < ixLen; ix++) {
        if (objClothes[clothes[ix][1]]) {
            objClothes[clothes[ix][1]]++;
        } else {
            objClothes[clothes[ix][1]] = 1;
        }
    }
    
    const valClothes = Object.values(objClothes);
   
    for(let ix = 0; ix < valClothes.length; ix++) {
        answer *= valClothes[ix] + 1;
    }
    
    return answer - 1;
}

function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

/* 입을 수 있는 옷 종류의 수는 각 종류별로 선택할지 안 할지 여부(+1)를 포함하여 
(A종류 옷 가지수 + 1)*(B종류 옷 가지수 + 1)*(C종류 옷 가지수 + 1) - 1로 구할 수 있다.
마지막 -1은 아무것도 선택하지 않은 경우는 없어야하므로 제외한것이다.*/