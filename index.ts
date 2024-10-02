let project: { member: string[], days: number, started: boolean } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}

// union type
let member: (number | string | boolean) = 222
let members: (string | number)[] = [1, 2, '3']
let obj: { a: number | string } = {
    a: '123',
}

let anyType: any // 타입실드 헤제, 타입스크립트의 의미가 아님
let unknownType: unknown // 이게 any보다 안정성 측면에서 나음 (버그 잡아줌)

let age: string | number

// ts는 수학적계산도 매우 엄격
// age + 1 에러남
// unknownType + 1 에러남

let 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend: string | string[]
}
    = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

// 함수 타입 지정
const EX = (x: number): number => { // 뒤의 number는 return 값의 타입
    return x * 2
}

const EX2 = (x?: number): void => { // void는 return 없을때 사용, 실수로 return하는것을 잡아줌
    if (x) { x * 2 }                      // ?는 옵션임 ==> x : number | undefined 와 같음
}
EX2() // x?이기 때문에 매개변수 없이 함수 선언 가능


const EX3 = (x: number | string): void => {
    // console.log(x+3) 에러나는 이유 == 수학적 계산 매우 엄격하기때문 숫자거나 '문자'거나 에서 에러발생
}

const EX4 = (name?: string): void => {
    if (name) {
        console.log(`hi ${name}`)
    } else {
        console.log('there is no name')
    }
}

const EX5 = (x: string | number): number => {
    const answer = x.toString()
    return answer.length
}

const EX6 = (income: number, hasHouse: boolean, charmScore: string): string | void => {
    let score = 0;
    score + income
    if (hasHouse) {
        score + 500
    }
    if (charmScore === '상') {
        score + 100
    }
    return score >= 600 ? '결혼가능' : undefined
}

// Narrowing & Assertion
// Narrowing ==> typeof 변수 / 속성명 in 오브젝트자료 / 인스턴스 instanceof 부모
const EX7 = (x: number | string) => {
    let arr: number[] = []
    arr[0] = x as number // Assertion ==> as문법으로 타입을 확정시킴 (어떤 타입이 들어올지 100% 확신할때) (디버깅 비상용으로 주요 사용)

    if (typeof x === 'string') { // Narrowing ==> 유니온 타입에서 typeof 메서드로 타입체크
        return x + '1'
    } else {
        return x + 1
    }

} // Narrowing문법이 더 안전하다 그냥 Narrowing if문법 쓰세요


const EX8 = (arr: (string | number)[]): number[] => {
    const newArr: number[] = []
    for (const arrItem of arr) {
        if (typeof arrItem === 'string') {
            newArr.push(parseInt(arrItem))
        } else {
            newArr.push(arrItem)
        }
    }
    return newArr
}

const EX9 = (teacher: { subject: string | string[] }): string => {
    if (typeof teacher.subject === 'string') {
        return teacher.subject
    } else {
        const arr = [...teacher.subject]
        return arr.reverse()[0]
    }
}

// 변수에 타입 담기 'type alias' 남이봤을때 보기 좋은코드를 만드세요(작명포함, 대문자시작)
type AnimalType = string | number | undefined
type AnimalType2 = {
    name: string,
    age: number
}
let animal2: AnimalType
let animal: AnimalType2 = { name: '22', age: 40 }

// readonly 사용하면 obj 혹은 arr 자료형의 참조형 내부 값을 변경못하도록 할 수 있음 (ts파일에서만 그냥 경고를 줌)
type GirlType = {
    readonly name?: string
}
const girl: GirlType = {
    name: 'Ruah'
}
// girl.name = 'Ruahna' // 에러남

// type alias 서로 합쳐서 유니온 타입으로 변경도 가능
type Name = string
type Age = number
type Perseon = Name | Age

// obj 타입을 서로 합칠수도 있음(extend) '& 연산자 사용'
type PositionX = { x: number }
type PositionY = { y: number }
type CombinedPosition = PositionX & PositionY // {x : number, y :number}
// type alias는 재정의 불가능하다

type ExType = { color?: string, size: number, readonly position: number[] }

// Literal types 변수에 뭐가 들어올지 값까지 더 엄격하게 관리가능 & 자동완성 힌트
let qwe: 123
let me: 'bold' | 'super'
function ddd(a: 'hello'): 1 | 0 {
    return 1
}
ddd('hello')

type SissorType = ('가위' | '바위' | '보')
const EXfunc = (x: SissorType): SissorType[] => {
    const arr: SissorType[] = []
    arr.push(x)
    return arr
}
EXfunc('가위')

let file = {
    name: 'kim'
} as const // as const를 사용하므로써 object value값을 그대로 타입으로 지정 & readonly로 바꿔줌

const ff = (a: 'kim') => { // a : 'kim'은 타입자체를 'kim'으로 지정해버리는것

}
ff(file.name) // 이 에러를 해결 가능

// 함수 타입의 type alias
type funcType = (a: string) => number //return type 지정이 number
const functionEX: funcType = (a) => { return 1 } // 이런식으로 타입지정

type CutType = (a: string) => string
const cutZero: CutType = (a) => {
    if (a[0] === '0') {
        return a.slice(1)
    } else return a
}

type RemoveType = (a: string) => number
const removeDash: RemoveType = (a) => {
    const num = a.replace(/-/g, '')
    return parseInt(num)
}
// 콜백함수를 타입 지정하기
type FinalType = (num: string, cutFx: typeof cutZero, removeFx: typeof removeDash) => number
const finalFunc: FinalType = (num, cutFx, removeFx) => {
    const result = cutFx(num)
    return removeFx(result)
}
finalFunc('010-1111-2222', cutZero, removeDash)


// TS에서 HTML 변경 조작 주의
let title = document.querySelector('#title');
if (title !== null) { // 셀렉터로 HTML을 찾으면 NUll일수도 있기때문에 Narrowing 필요
    title.innerHTML = 'hiiiii'
}
if (title instanceof Element) { // 이 방법으로 가장 많이 HTML 조작 Narrowing함
    title.innerHTML = 'hiiiii'
}
if (title?.innerHTML) { // ?로 조건문으로 처리하던가
    title.innerHTML = 'helloooo'
}
// let title = document.querySelector('#title') as Element // 이런 방법도 존재 100% 확신할때만..

let link = document.querySelector('.link')
if (link instanceof HTMLAnchorElement) { // 링크 주소 바꾸려면
    link.href = 'kakao.com'
}
let btn = document.querySelector('#button') // event달기
let img = document.querySelector('#image')
btn?.addEventListener('click', () => {
    if(img instanceof HTMLSourceElement){
        img.src = 'new.jpg'
    }
})



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
    name:string //필드, 타입지정 가능
    age:number
    constructor(name:string,age:number){
        this.name = name //TS에서 오브젝트 키값을 선언할때 위에 필드값을 지정해줘야함
        this.age = age
    }

    test(w:string):void{ // TS에서 프로토타입 작성하는 방법
        console.log('hello' + w)
    }

}
let man = new Person('sungwoo',90)
let man2 = new Person('ryan',28)
//클래스 예제
type WordType = (number|string)
class Word {
    num
    str
    constructor(...args:WordType[]){
        let numType:number[] = []
        let strType:string[] = []
        args.forEach(item => {
            if(typeof item === 'number'){
                numType.push(item)
            } else if(typeof item === 'string'){
                strType.push(item)
            }
        })

        this.num = numType
        this.str = strType

    }
}
const testObj = new Word('kim',3,5,'park')
console.log(testObj.num) // [3,5]
console.log(testObj.str) // ['kim', 'park']

//interface         //obj 타입지정할때 주로 사용
interface Square  {color : string, width : number}
interface SquareExtend extends Square {
    height : number
}
let box:Square = {color : 'red', width : 300}
let box2:SquareExtend = {height : 333, color : 'white', width : 400}


type Animal = {name : string}
type Cat = {age : number} & Animal // {age : number, name : string}

// interface의 extend와 , type의 & 기호 사용이 뭐가 다른가?
// 똑같이 작용함.

// 하지만 interface는 중복선언을 허용함 (타입이 합쳐짐) <-> 타입은 중복선언 불가(엄격함)
interface Hi {
    name : string
}
interface Hi {
    age : number
}
// 여기서 Hi의 타입선언은 {name : string, age : number}이 됨


interface FX {
    plus : (x:number, y: number) => number,
    minus : (x:number, y: number) => number,
 }
 
 const objEx:FX = { // interface로 함수타입도 타입지정가능
    plus(x,y){
       return x+y
    },
    minus(x, y){
       return x-y
    }
 }

// rest parameter는 출력시 arr 자료형으로 받아옴 (...연산자)
const testFuc = (...params:number[]) => {
    console.log(params)
}
testFuc(1,2,3,4,2,5,2,34)

// Destructuring 타입지정(obj)
type ExType2 = {user:string, comment : number[], admin:boolean}
const test2 = ({user, comment, admin}:ExType2):void => {
  console.log(user,comment,admin)
}
test2({ user : 'kim', comment : [3,5,4], admin : false })

