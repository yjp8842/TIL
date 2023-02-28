// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText<string>('하이'); // 명시적으로 string이라는 타입을 넘기겠다


// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   // text.split('').reverse().join('');
//   return num;
// }

// // string, number, boolean 등등의 타입을 모두 받기 위해서
// // 각각의 타입을 받는 함수를 여러개 지정할 수 있지만
// // 타입만 바뀌었다해서 중복되는 코드들을 계속해서 생산해 나간다는 것은
// // 유지보수 관점에서 매우 좋지 않음
// logText('a');
// logText(10);
// logNumber(10);
// logText(true);


// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// // a.split('');
// // logText에 문자를 담았음에도 불구하고 a를 split할 때 에러가 발생함
// // string과 number 타입에서 split이 제공되지 않기 때문에
// // 타입이 정확하게 무엇인지 알 수 있어야만 split을 쓸 수 있음
// // 유니온 타입을 이용했을 경우 input에 대해서는 해결이 되었지만
// // 반환값에 대해서는 해결이 되지 않음을 알 수 있음
// logText(10);


// 제네릭의 장점과 타입 추론에서의 이점
// 실제로 함수를 정의할 때 타입을 비워놓은 상태에서 
// 호출하는 시점에 정의하는 것이 제네릭이다
// 그 타입을 추론해서 최종 반환값까지 붙일 수 있는 것이 제네릭이다
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };  // 에러
// const obj: Dropdown = { value: 'abc', selected: false };  

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);