// The Factory Method is a creational design pattern that provides an interface for creating objects in a 
// superclass, but allows subclasses to alter the type of objects that will be created.

// It’s often used in applications where a class can’t anticipate the type of objects it needs to create.
//  This pattern provides a way to delegate the instantiation logic to child classes, 
//  which can be more specific about what objects should be created.

// The Factory Method defines a method that should be used to create objects instead of calling a constructor directly.
//  The subclasses can then override this method to change the class of objects that will be created.

// https://www.youtube.com/watch?v=EcFVTgRHJLM&t=1466s

CoordinateSystem = {
    CARTESIAN : 0,
    POLAR : 1
  };
  
  class Point
  {
    constructor(x, y)
    {
      this.x = x;
      this.y = y;
    }
  
    // constructor(a, b, cs=CoordinateSystem.CARTESIAN)
    // {
    //   switch (cs)
    //   {
    //     case CoordinateSystem.CARTESIAN:
    //       this.x = a;
    //       this.y = b;
    //       break;
    //     case CoordinateSystem.POLAR:
    //       this.x = a * Math.cos(b);
    //       this.y = a * Math.sin(b);
    //       break;
    //   }
    //
    //   // steps to add a new system
    //   // 1. augment CoordinateSystem
    //   // 2. change ctor
    // }
  
    static newCartesianPoint(x, y)
    {
      return new Point(x, y);
    }
  
    static newPolarPoint(rho, theta)
    {
      return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
  
    static get factory()
    {
      return new PointFactory();
    }
  }
  
  class PointFactory
  {
    // not necessarily static
    newCartesianPoint(x, y)
    {
      return new Point(x, y);
    }
  
    static newPolarPoint(rho, theta)
    {
      return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
  }
  
  let p1 = new Point(2, 3, CoordinateSystem.CARTESIAN);
  console.log(p1);
  // Point → PointFactory
  let p2 = PointFactory.newPolarPoint(5, Math.PI/2);
  console.log(p2);
  
  // this line will not work if newCartesianPoint is static!
  let p3 = Point.factory.newCartesianPoint(2, 3);
  console.log(p3);


  // 1. Create an interface called "Car" that defines the basic structure of a car object.
class Car {
    constructor(model) {
      this.model = model;
    }
  
    drive() {
      console.log(`Driving a ${this.model} car`);
    }
  }
  
  // 2. Create concrete classes for each type of car (Sedan, Hatchback, and SUV) that implement the Car interface.
  class Sedan extends Car {
    constructor(model) {
      super(model);
    }
  }
  
  class Hatchback extends Car {
    constructor(model) {
      super(model);
    }
  }
  
  class SUV extends Car {
    constructor(model) {
      super(model);
    }
  }
  
  // 3. Create a Factory class that has a method that returns a new car object based on the type of car requested
  class CarFactory {
    static createCar(model) {
      switch (model) {
        case "sedan":
          return new Sedan(model);
        case "hatchback":
          return new Hatchback(model);
        case "suv":
          return new SUV(model);
        default:
          throw new Error("Invalid car model");
      }
    }
  }
  
  // 4. Whenever a new car is needed, the client code calls the createCar method of the Factory class and passes in the type of car desired
  const sedan = CarFactory.createCar("sedan");
  const hatchback = CarFactory.createCar("hatchback");
  const suv = CarFactory.createCar("suv");
  
  // 5. The Factory class then returns a new car object of the desired type
  sedan.drive(); // Driving a sedan car
  hatchback.drive(); // Driving a hatchback car
  suv.drive(); // Driving a suv car