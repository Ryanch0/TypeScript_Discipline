let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// union type
let member = 222;
let members = [1, 2, '3'];
let obj = {
    a: '123',
};
let anyType; // 타입실드 헤제, 타입스크립트의 의미가 아님
let unknownType; // 이게 any보다 안정성 측면에서 나음 (버그 잡아줌)
let age;
// ts는 수학적계산도 매우 엄격
// age + 1 에러남
// unknownType + 1 에러남
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 함수 타입 지정
const EX = (x) => {
    return x * 2;
};
const EX2 = (x) => {
    x * 2; // ?는 옵션임 ==> x : number | undefined 와 같음
};
EX2(); // x?이기 때문에 매개변수 없이 함수 선언 가능
const EX3 = (x) => {
    // console.log(x+3) 에러나는 이유 == 수학적 계산 매우 엄격하기때문 숫자거나 '문자'거나 에서 에러발생
};
const EX4 = (name) => {
    if (name) {
        console.log(`hi ${name}`);
    }
    else {
        console.log('there is no name');
    }
};
const EX5 = (x) => {
    const answer = x.toString();
    return answer.length;
};
const EX6 = (income, hasHouse, charmScore) => {
    let score = 0;
    score + income;
    if (hasHouse) {
        score + 500;
    }
    if (charmScore === '상') {
        score + 100;
    }
    return score >= 600 ? '결혼가능' : undefined;
};
// Narrowing & Assertion
// Narrowing ==> typeof 변수 / 속성명 in 오브젝트자료 / 인스턴스 instanceof 부모
const EX7 = (x) => {
    let arr = [];
    arr[0] = x; // Assertion ==> as문법으로 타입을 확정시킴 (어떤 타입이 들어올지 100% 확신할때) (디버깅 비상용으로 주요 사용)
    if (typeof x === 'string') { // Narrowing ==> 유니온 타입에서 typeof 메서드로 타입체크
        return x + '1';
    }
    else {
        return x + 1;
    }
}; // Narrowing문법이 더 안전하다 그냥 Narrowing if문법 쓰세요
const EX8 = (arr) => {
    const newArr = [];
    for (const arrItem of arr) {
        if (typeof arrItem === 'string') {
            newArr.push(parseInt(arrItem));
        }
        else {
            newArr.push(arrItem);
        }
    }
    return newArr;
};
const EX9 = (teacher) => {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    }
    else {
        const arr = [...teacher.subject];
        return arr.reverse()[0];
    }
};
let animal2;
let animal = { name: '22', age: 40 };
