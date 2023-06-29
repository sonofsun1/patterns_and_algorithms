// Product
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

  public abstract displayInfo(): void;
}

// Concrete Product - Cat
class Cat extends Animal {
  constructor(name: string, age: number, breed: string) {
    super(name, age, breed);
    this.species = 'Cat';
  }

  public displayInfo(): void {
    console.log(`Species: ${this.species}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Breed: ${this.breed}`);
  }
}

// Concrete Product - Dog
class Dog extends Animal {
  constructor(name: string, age: number, breed: string) {
    super(name, age, breed);
    this.species = 'Dog';
  }

  public displayInfo(): void {
    console.log(`Species: ${this.species}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Breed: ${this.breed}`);
  }
}

// Creator
abstract class AnimalCreator {
  public abstract createAnimal(name: string, age: number, breed: string): Animal;

  public displayAnimalInfo(name: string, age: number, breed: string): void {
    const animal = this.createAnimal(name, age, breed);
    animal.displayInfo();
  }
}

// Concrete Creator - Cat Creator
class CatCreator extends AnimalCreator {
  public createAnimal(name: string, age: number, breed: string): Animal {
    return new Cat(name, age, breed);
  }
}

// Concrete Creator - Dog Creator
class DogCreator extends AnimalCreator {
  public createAnimal(name: string, age: number, breed: string): Animal {
    return new Dog(name, age, breed);
  }
}

// Usage
const catCreator: AnimalCreator = new CatCreator();
catCreator.displayAnimalInfo('Whiskers', 3, 'Persian');

const dogCreator: AnimalCreator = new DogCreator();
dogCreator.displayAnimalInfo('Buddy', 5, 'Labrador Retriever');
