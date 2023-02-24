// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');


var seho: string | number | boolean;
// union 타입 -> 하나의 특정 타입 이상을 쓸 수 있게 만드는 것
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

// union 타입의 특징
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   someone.name;
//   // someone.skill; -> union 타입을 썼음에도 불구하고 Developer와 Person의 공통된 속성만 접근할 수 있음
//   // someone.age;   -> 그 이유는 Developer도 되어야 하고 Person도 되어야하기 때문에 
//   // 인터페이스나 특정 구조체를 유니온 타입을 통해 여러개를 썼을 때 공통된 속성 즉, 보장된 속성에 대해서만 제공함
// }

// union 타입을 썼을 때
// Devleoper나 Person 중 하나만 만족하는 객체만 넘겨도됨
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

// function askSomeone(someone: Developer & Person) {
//   someone.name;
//   someone.skill; -> 인터섹션 타입을 쓰면 Developer와 Person의 모든 속성에 접근할 수 있음
//   someone.age;   -> 인터섹션 타입을 쓰면 Developer와 Person의 모든 속성에 접근할 수 있음
// }

// 인터섹션 타입을 썼을 때
// Developer와 Person의 객체를 모두 넘겨야함
// askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });


// var seho: string | number | boolean;
// var capt: string & number & boolean;

