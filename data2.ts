export let ccc = 10
declare global{
    type Dog = string // 여기는 글로벌 모듈로 정의
}
export{} // 나머지는 로컬 모듈로 만듬