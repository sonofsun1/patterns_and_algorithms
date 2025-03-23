// Adaptee - Cat
class Cat {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public meow(): void {
    console.log(`${this.name} says meow!`);
  }
}

// Target - Dog
interface Dog {
  bark(): void;
}

// Adapter
class CatAdapter implements Dog {
  private cat: Cat;

  constructor(cat: Cat) {
    this.cat = cat;
  }

  bark(): void {
    this.cat.meow();
  }
}

// Usage
const cat: Cat = new Cat('Whiskers');
cat.meow(); // Direct usage of Cat's meow method

const catAdapter: Dog = new CatAdapter(cat);
catAdapter.bark(); // Adapted usage of Cat's meow method as Dog's bark method
