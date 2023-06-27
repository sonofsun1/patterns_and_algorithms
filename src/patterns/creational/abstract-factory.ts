// Abstract product A
interface ProductA {
  operationA(): void;
}

// Abstract product B
interface ProductB {
  operationB(): void;
}

// Abstract Factory
abstract class AbstractFactory {
  abstract createProductA(): ProductA;
  abstract createProductB(): ProductB;
}

// Concrete factory 1
class ConcreteFactory1 extends AbstractFactory {
  createProductA(): ProductA {
    return new ConcreteProductA1();
  }

  createProductB(): ProductB {
    return new ConcreteProductB1();
  }
}

// Concrete factory 2
class ConcreteFactory2 extends AbstractFactory {
  createProductA(): ProductA {
    return new ConcreteProductA2();
  }

  createProductB(): ProductB {
    return new ConcreteProductB2();
  }
}

// Concrete product A1
class ConcreteProductA1 implements ProductA {
  operationA(): void {
    console.log('ConcreteProductA1.operationA');
  }
}

// Concrete product A2
class ConcreteProductA2 implements ProductA {
  operationA(): void {
    console.log('ConcreteProductA2.operationA');
  }
}

// Concrete product B1
class ConcreteProductB1 implements ProductB {
  operationB(): void {
    console.log('ConcreteProductB1.operationB');
  }
}

// Concrete product B2
class ConcreteProductB2 implements ProductB {
  operationB(): void {
    console.log('ConcreteProductB2.operationB');
  }
}

// Client code
function clientCode(factory: AbstractFactory): void {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  productA.operationA();
  productB.operationB();
}

// Usage
const factory1: AbstractFactory = new ConcreteFactory1();
clientCode(factory1);

const factory2: AbstractFactory = new ConcreteFactory2();
clientCode(factory2);
