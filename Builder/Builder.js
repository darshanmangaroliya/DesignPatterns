// The Builder Design Pattern is a creational design pattern that allows for the step-by-step creation of complex objects using a builder object.
//  This design pattern provides an effective way to create objects that have a lot of constructor parameters, by breaking down the construction process into multiple steps, allowing for more readable and maintainable code

class Person {
  constructor(builder) {
    this.streetAddress = builder.streetAddress;
    this.postcode = builder.postcode;
    this.city = builder.city;
    this.companyName = builder.companyName;
    this.position = builder.position;
    this.annualIncome = builder.annualIncome;
  }
}

// Builder Class
class PersonBuilder {
  constructor() {
    this.streetAddress = undefined;
    this.postcode = undefined;
    this.city = undefined;
    this.companyName = undefined;
    this.position = undefined;
    this.annualIncome = undefined;
  }

  withStreetAddress(streetAddress) {
    this.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.postcode = postcode;
    return this;
  }

  withCity(city) {
    this.city = city;
    return this;
  }

  withCompanyName(companyName) {
    this.companyName = companyName;
    return this;
  }

  withPosition(position) {
    this.position = position;
    return this;
  }

  withAnnualIncome(annualIncome) {
    this.annualIncome = annualIncome;
    return this;
  }

  build() {
    return new Person(this);
  }
}

// usage
const person = new PersonBuilder()
  .withStreetAddress("102 xyz Road")
  .withPostcode("390001")
  .withCity("Amd")
  .withCompanyName("xyz")
  .withPosition("Engineer")
  .withAnnualIncome(123000)
  .build();

console.log(person);
