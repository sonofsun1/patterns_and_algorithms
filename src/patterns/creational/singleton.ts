// Singleton class
class Universe {
  private static instance: Universe | null = null;

  public age: number;

  constructor(age: number) {
    if (Universe.instance) {
      return Universe.instance;
    }

    this.age = age;
    Universe.instance = this;
  }
}

// Usage
const ourUniverse: Universe = new Universe(13800000000);
console.log(ourUniverse.age);

// attempt to crate new universe
const anotherUniverse: Universe = new Universe(100000);
console.log(anotherUniverse.age); // the same age, argument is ignored

console.log(ourUniverse === anotherUniverse); // refer the same object