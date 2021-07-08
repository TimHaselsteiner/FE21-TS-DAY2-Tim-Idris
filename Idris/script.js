//BASIC EX1.
// class Person {
//     name: string;
//     age: number;
//     jobTitle: string;
//     constructor(name, age, jobTitle) {
//         this.name = name;
//         this.age = age;
//         this.jobTitle = jobTitle;
//     }
//     hello() {
//         return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
//     }
// }
// console.log(Person);
// var person1 = new Person("Idris", 22, "WEbDeveloper");
// console.log(person1.hello());
// //BASIC EX2
// class Fireman extends Person {
//     salary: number;
//     jobLocation: string;
//     constructor(name, age, jobTitle, salary, jobLocation){
//         super(name, age, jobTitle);
//         this.salary = salary;
//         this.jobLocation = jobLocation;
//     }
//     wage() {
//         return `${super.hello()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
//     }
// }
// var person2 = new Fireman("Tim", 21, "Web-Developer", 6000, "Vienna");
// console.log(person2.wage());
//ADVANCED
// Swal.fire({
//     imageUrl: 'https://placeholder.pics/svg/300x1500',
//     imageHeight: 1500,
//     imageAlt: 'A tall image'
//   })
