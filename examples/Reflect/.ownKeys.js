//枚举es6 class中所有原型上的方法
console.log('枚举es6 class中所有原型上的方法\n');

class MyService{
  static defaultProps = {};
  static zgs = () => {};
  static getCity() {}

  dead = () => {};

  fxxk() {}
  mmp() {}
  cao() {}

  [Symbol('fxxk me harder')]() {}
}

const m = new MyService();

//1
console.log(Reflect.ownKeys(MyService.prototype).filter(fn => fn !== 'constructor'));

//2
console.log(Object.getOwnPropertyNames(MyService.prototype).concat(Object.getOwnPropertySymbols(MyService.prototype)));

//3
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(m)), Object.getOwnPropertySymbols(Object.getPrototypeOf(m)));

//4
console.log(Reflect.ownKeys(Reflect.getPrototypeOf(m)));


//枚举es6 class中的所有静态方法
console.log('枚举es6 class中的所有静态方法\n');

console.log(Object.getOwnPropertyNames(MyService).filter(fn => typeof MyService[fn] === 'function'));
