// let obj = {
//   name: "Maria",
//   age: 28,
//   languages: ["english", "france", "korean"],
// };

// console.log(obj.languages);

// class Student {
//   constructor(name, birthYear) {
//     (this.name = name),
//       (this.age = 2021 - birthYear),
//       (this.school = "Purwadhika"),
//       (this.courses = ["English", "Mathematics", "History", "Music"]);
//   }

//   intro() {
//     console.log(
//       `My name is ${this.name}, I'm ${
//         this.age
//       } years old. I study ${this.courses.join(", ")} at ${this.school}`
//     );
//   }
// }

// let Maria = new Student("Maria Lauren", 2001);
// Maria.intro();

// class Student {
//   constructor(name, birthYear, address) {
//     this.name = name;
//     this.age = 2021 - birthYear;
//     this.address = address;
//   }

//   intro() {
//     console.log(
//       `Hi, my name is ${this.name}. I'm ${this.age} years old, and I'm from ${this.address}.`
//     );
//   }
// }

// class CollegeStudent extends Student {
//   constructor(name, birthYear, address, university, scholarship) {
//     super(name, birthYear, address);
//     this.university = university;
//     this.scholarship = scholarship;
//   }

//   ScholarshipInfo() {
//     console.log(
//       `I get scholarship from ${this.scholarship} to study at ${this.university}`
//     );
//   }
// }

// let Matthew = new CollegeStudent(
//   "Matthew Brian",
//   "2001",
//   "Otario",
//   "University of Melbourne",
//   "MIFRS"
// );

// Matthew.intro();
// Matthew.ScholarshipInfo();

// //EXERCISE 1
// let dateNow = new Date();
// console.log(dateNow.getMonth());

let student = {
  name: "Sabastian String",
  age: 20,
  class: ["Art", "Mathematics", "Science"],
  pass: true,
  intro: function (name, age) {
    console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old.`);
  },
};

delete student.pass;
console.log(student);
