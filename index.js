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
    if (x) {
        x * 2;
    } // ?는 옵션임 ==> x : number | undefined 와 같음
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
const girl = {
    name: 'Ruah'
};
// Literal types 변수에 뭐가 들어올지 값까지 더 엄격하게 관리가능 & 자동완성 힌트
let qwe;
let me;
function ddd(a) {
    return 1;
}
ddd('hello');
const EXfunc = (x) => {
    const arr = [];
    arr.push(x);
    return arr;
};
EXfunc('가위');
let file = {
    name: 'kim'
}; // as const를 사용하므로써 object value값을 그대로 타입으로 지정 & readonly로 바꿔줌
const ff = (a) => {
};
ff(file.name); // 이 에러를 해결 가능
const functionEX = (a) => { return 1; }; // 이런식으로 타입지정
const cutZero = (a) => {
    if (a[0] === '0') {
        return a.slice(1);
    }
    else
        return a;
};
const removeDash = (a) => {
    const num = a.replace(/-/g, '');
    return parseInt(num);
};
const finalFunc = (num, cutFx, removeFx) => {
    const result = cutFx(num);
    return removeFx(result);
};
finalFunc('010-1111-2222', cutZero, removeDash);
// TS에서 HTML 변경 조작 주의
let title = document.querySelector('#title');
if (title !== null) { // 셀렉터로 HTML을 찾으면 NUll일수도 있기때문에 Narrowing 필요
    title.innerHTML = 'hiiiii';
}
if (title instanceof Element) { // 이 방법으로 가장 많이 HTML 조작 Narrowing함
    title.innerHTML = 'hiiiii';
}
if (title === null || title === void 0 ? void 0 : title.innerHTML) { // ?로 조건문으로 처리하던가
    title.innerHTML = 'helloooo';
}
// let title = document.querySelector('#title') as Element // 이런 방법도 존재 100% 확신할때만..
let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) { // 링크 주소 바꾸려면
    link.href = 'kakao.com';
}
let btn = document.querySelector('#button'); // event달기
let img = document.querySelector('#image');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    if (img instanceof HTMLSourceElement) {
        img.src = 'new.jpg';
    }
});
// // 클래스 문법 일반 자바스크립트
// class Lol { // 오브젝트 쉽게 만들수있음
//     constructor(x,y){
//         this.q = x
//         this.w = y
//     }
// }
// //프로토타입
// Lol.prototype.hello = 'Ryan' // Lol클래스로 생성된 모든 객체에 hello라는 prototype이 생성됨
// const nunu = new Lol('consume', 'strike')
// console.log(nunu)
class Person {
    constructor(name, age) {
        this.name = name; //TS에서 오브젝트 키값을 선언할때 위에 필드값을 지정해줘야함
        this.age = age;
    }
    test(w) {
        console.log('hello' + w);
    }
}
let man = new Person('sungwoo', 90);
let man2 = new Person('ryan', 28);
class Word {
    constructor(...args) {
        let numType = [];
        let strType = [];
        args.forEach(item => {
            if (typeof item === 'number') {
                numType.push(item);
            }
            else if (typeof item === 'string') {
                strType.push(item);
            }
        });
        this.num = numType;
        this.str = strType;
    }
}
const testObj = new Word('kim', 3, 5, 'park');
console.log(testObj.num); // [3,5]
console.log(testObj.str); // ['kim', 'park']
let box = { color: 'red', width: 300 };
let box2 = { height: 333, color: 'white', width: 400 };
const objEx = {
    plus(x, y) {
        return x + y;
    },
    minus(x, y) {
        return x - y;
    }
};
