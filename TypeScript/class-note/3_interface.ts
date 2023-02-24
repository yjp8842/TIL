interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 100
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; -> 문자열이 아니라 숫자가 왔기 때문에 에러

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  // cssFile: 'css' -> 정규표현식이 아니라 문자열이 왔기 때문에 에러
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = 'a'; -> 정의해놓은 규칙 즉, 인터페이스에 어긋나기 때문에 에러

Object.keys(obj).forEach(function(value) {

});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

// 다른 인터페이스에서 중복되는 값들을 가지고 있을 때 갖고 있는 속성과 타입에 대해서 상속을 받아서 사용할 수 있음
// extends
interface Developer extends Person {
  // name: string;
  // age: number;
  language: string;
}

var captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴'
}