import { iunderGrad } from "../interfaces/iundergrad";

// creating a class called students
class Students {

  name: string;
  age: number;
  gender: string;
  nationality: string;

  constructor(name: string, age: number, gender: string, nationality: string) {
    this.name = name;
    this.age = age;
    this.gender = 'Female';
    this.nationality = nationality;
  }

  getNationality(): void {
    console.log(`${this.name}'s nationality is ${this.nationality}`);
  }

}

class UnderGrad extends Students implements iunderGrad {
  batch: number;
  gpa: number;
  constructor(name: string, age: number, gender: string, nationality: string, batch: number, gpa: number) {
    super(name, age, gender, nationality);
    this.batch = batch;
    this.gpa = gpa;
  }
}

const students = [
  new UnderGrad ('Moneer', 28, 'Male', 'Yemeni', 7, 2.3),
  new UnderGrad ('Carlos', 49, 'Male', 'Canadian', 3, 3.5),
  new UnderGrad ('Moose', 69, 'Male', 'Alian', 1, 3.8),
  new UnderGrad ('Pete', 33, 'Male', 'Petenia', 5, 2.9)
]

students.forEach(student => {
  console.log(student.getNationality());
  console.log(student.gender)
})