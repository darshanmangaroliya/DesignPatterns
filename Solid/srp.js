// The Single Responsibility Principle (SRP) is a principle of object-oriented programming and software 
// engineering. It states that a class should have only one reason to change, meaning that a class should 
// have only one responsibility. Adhering to SRP results in more maintainable and scalable code, as changes
//  to the code are more localized and do not affect other parts of the system.





const fs = require("fs");

//single responsbility to single class
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}
Journal.count = 0;

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry("I cried today.");
j.addEntry("I ate a bug.");
console.log(j.toString());

let p = new PersistenceManager();
let filename = "c:/temp/journal.txt";
p.saveToFile(j, filename);

// separation of concerns
