
namespace MyMathNs {
  const PI: number = 3.14;

  export function calcCircum (diam: number) : number{
    return diam * PI;
  }

  export function calcRect(width: number, length: number) : number {
    return width * length;
  }
}
const PI:number = 2.99;
console.log(MyMathNs.calcCircum(10));