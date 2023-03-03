interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
  // skill: string;
}

var developer: Developer;
var person: Person;
// developer = new Person();
// person = developer;

// 타입스크립트에서 타입 코드 간의 타입이 맞는지 확인할 때는 interface나 class로 확인하는 것이 아니라
// 내부적으로 존재하고 있는 속성과 타입에 대한 정의들에 대해서 비교한다

// 함수
var add = function(a: number) {
  // ...
}

var sum = function(a: number, b: number) {
  // ...
}

// add = sum;  // 에러
sum = add;

// 제네릭
interface Empty<T> {
  //...
}

var empty1: Empty<string>;
var empty2: Empty<number>;
// empty1 = empty2;  // 가능(한데 왜 에러가 나냐..)
// 학습 목적으로 작성한 코드이다보니 변수 초기 값을 넣지 않고 사용해서 나타난 에러이므로 신경쓰지 않아도됨
// empty2 = empty1;  // 가능

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;  // 에러
// notempty2 = notempty1;  // 에러