let double = (value: number) : number => {
  return value * 2;
}
console.log(double(2));

let greet = (name: string = 'Max') : void => {
  console.log("Hello, %s", name);
}

greet();
greet('Felipe');

let numbers : number[] = [-3, 33, 38, 5];
console.log('%i', Math.min(...numbers));
