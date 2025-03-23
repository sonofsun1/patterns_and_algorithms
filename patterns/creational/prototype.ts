// Prototype
abstract class Animal {
  protected species: string;
  protected name: string;
  protected age: number;
  protected breed: string;

  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  abstract clone(): Animal;

  public displayInfo(): void {
    console.log(`Species: ${this.species}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Breed: ${this.breed}`);
  }
}

// Concrete Prototype - Cat
class Cat extends Animal {
  constructor(name: string, age: number, breed: string) {
    super(name, age, breed);
    this.species = 'Cat';
  }

  public clone(): Animal {
    return new Cat(this.name, this.age, this.breed);
  }
}

// Concrete Prototype - Dog
class Dog extends Animal {
  constructor(name: string, age: number, breed: string) {
    super(name, age, breed);
    this.species = 'Dog';
  }

  public clone(): Animal {
    return new Dog(this.name, this.age, this.breed);
  }
}

// Client
const originalCat: Cat = new Cat('Whiskers', 3, 'Persian');
const clonedCat: Cat = originalCat.clone();

const originalDog: Dog = new Dog('Buddy', 5, 'Labrador Retriever');
const clonedDog: Dog = originalDog.clone();

originalCat.displayInfo();
clonedCat.displayInfo();

originalDog.displayInfo();
clonedDog.displayInfo();
