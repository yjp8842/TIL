// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

function logText<T>(text: T):T {
  console.log(text);
  return text;
}

logText<string>('하이'); // 명시적으로 string이라는 타입을 넘기겠다