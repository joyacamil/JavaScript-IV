// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorAttr){
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage
    this.catchPhrase = instructorAttr.catchPhrase;
   }  
  demo(subject) {
   console.log(`Today we are learning about ${subject}`);
  }
  grade(student,subject){
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}
class Student extends Person {
  constructor(studentAttr){
    super(personAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
    listsSubjects() {
      console.log(favoriteSubjects[]);
    }
    PRAssignment(subject) {
     console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
      console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
}

class TeamLead extends Instructor {
  constructor(teamLeadAttr){
    super(teamLeadAttr);
    this.gradClassName= teamLeadAttr.gradClassName;
    this.favInstructor= teamLeadAttr.favInstructor;
}
    standUp() {
      console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode() {
      console.log(`${name} debugs ${student.name}'s code on ${subject}.`)
    }
}