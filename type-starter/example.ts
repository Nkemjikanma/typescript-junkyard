/**
 * * Type Annotations
 */

let myName: string = "Nkemjika";
let isCool: boolean = true;
let favNumber: number = 9;

function add(a: number, b: number) {
  return a + b;
}

console.log(add(4, 2));

const numbersAndStrings: (string | number)[] = ["Ego", 2, "Mami"];

/**
 *
 * * Objects and interfaces
 */

interface Person {
  name: string;
  favNumber: number;
}

const person = {
  name: "Nkem",
  favNumber: 42,
};

function greet(person: Person) {
  return `Hello ${person.name}`;
}

console.log(greet(person));

/**
 * * Optional properties
 */

interface Person2 {
  name: string;
  class: string;
  petName?: string;
}

function greet2(person2: Person2) {
  return `Hello yo ${person2.petName}`;
}

console.log(
  greet2({
    name: "Kam",
    class: "jss3",
    petName: "Blu",
  })
);

/**
 * ? What is type?
 * * Used mainly in the alias type
 */

/**
 * * Classes
 */

/*class People {
  firstname: string;
  dogFirsName: string;
  favNum: number;

  constructor(firstname: string, dogFirstName: string, favNum: number) {
    this.firstname = firstname;
    this.dogFirsName = dogFirstName;
    this.favNum = favNum;
  }
}*/

// shorhand - an alternative to the above code

class People {
  static species = "Homosapien"; //only accessible on the class and not the instance
  constructor(
    public firstname: string,
    public dogFirstName: string,
    public favNum: number,
    /** different types */
    protected internalString: string,
    private privateSecrete: string,
    readonly notChange?: string
  ) {}
}

const nkem = new People("Nkem", "Jolly", 3, "supersecret", "supersupersecret");
console.log(nkem);

function cris(people: People) {
  console.log(People.species);
  return `Hello yo ${people.firstname}`;
}
console.log();

//classes can also extend interfaces?
interface peopleInterface {
  a: string;
  b: string;
}

/**
 * * Generics
 */

function sortItems<myCustomType>(
  items: myCustomType[],
  compareFn: (a: myCustomType, b: myCustomType) => number
): myCustomType[] {
  return items.sort(compareFn);
}
// normal convention is to use T as myCustomType
// sorting number
const numbers = [42, 3, 77, 13, 104, 82];
const sortedNumbers = sortItems<number>(numbers, (a, b) => a - b); // call the function and pass in the type for <myCustomType>
console.log(sortedNumbers);

//sorting strings
const names = ["Emeka", "Amaka", "Tboy", "Sido"];
const sortedNames = sortItems<string>(names, (a, b) => a.localeCompare(b));
console.log(sortedNames);

/**
 * * Unknown
 */

function safeParse(s: string): unknown {
  return JSON.parse(s);
}
