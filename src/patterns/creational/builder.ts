// Product
class Animal {
  public species: string;
  public name: string;
  public age: number;
  public breed: string;

  public getInfo(): void {
    console.log(`Species: ${this.species}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Breed: ${this.breed}`);
  }
}

// Abstract builder
abstract class AnimalBuilder {
  protected animal: Animal;

  // In this realization these methods are abstract but can be empty functions
  // to make their implementation in Concrete builder optional
  public abstract setName(): void;
  public abstract setAge(): void;
  public abstract setBreed(): void;

  public createAnimal(): void {
    this.animal = new Animal();
  }

  public getAnimal(): Animal {
    return this.animal;
  }
}

// Concrete builder for Cat
class CatBuilder extends AnimalBuilder {

  constructor() {
    super();
    this.animal.species = 'Cat';
  }

  public setName(): void {
    this.animal.name = 'Whiskers';
  }

  public setAge(): void {
    this.animal.age = 3;
  }

  public setBreed(): void {
    this.animal.breed = 'Persian';
  }
}

// Concrete Builder for Dog
class DogBuilder extends AnimalBuilder {

  constructor() {
    super();
    this.animal.species = 'Dog';
  }

  public setName(): void {
    this.animal.name = 'Buddy';
  }

  public setAge(): void {
    this.animal.age = 5;
  }

  public setBreed(): void {
    this.animal.breed = 'Labrador Retriever';
  }
}

// Director
class AnimalDirector {
  private builder: AnimalBuilder;

  public setBuilder(builder: AnimalBuilder): void {
    this.builder = builder;
  }

  public constructAnimal(): void {
    this.builder.createAnimal();
    this.builder.setName();
    this.builder.setAge();
    this.builder.setBreed();
  }

  public getAnimal(): Animal {
    return this.builder.getAnimal();
  }
}

// Usage
const animalDirector: AnimalDirector = new AnimalDirector();

const catBuilder: CatBuilder = new CatBuilder();
animalDirector.setBuilder(catBuilder);
animalDirector.constructAnimal();
const cat: Animal = animalDirector.getAnimal();
cat.getInfo();

const dogBuilder: DogBuilder = new DogBuilder();
animalDirector.setBuilder(dogBuilder);
animalDirector.constructAnimal();
const dog: Animal = animalDirector.getAnimal();
dog.getInfo();
