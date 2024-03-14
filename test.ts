interface Person {
  name : string;
  age : number;
}

const value : string = "문장";
console.log(value);

const obj : {name : string, age : number} = {
  name:  "홍길동",
  age: 20
}

console.log(obj);
console.log(obj.name);

function add (x : string , y : string) {
  return x + y;
}

const insa : string = "hello";
const basic : string = " world!";
const result : string = add(insa, basic);

console.log(result);