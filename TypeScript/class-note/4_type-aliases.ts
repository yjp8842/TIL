// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

// 타입 별칭을 썼을 때 장정
// 위쪽에 있었던 타입을 일일이 어떤 함수나 변수에 정의를 했을 때 매우 길어지기 때문에
// 별칭으로 활용하게 되면 좀 더 쉽게 타입을 정의할 수 있고
// 코드의 가독성도 높아진다
type Todo = { id: string; title: string; done: boolean; };
function getTodo(tood: Todo) {

}