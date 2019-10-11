class Person {
	constructor(personAttribute) {
		this.name = personAttribute.name;
		this.age = personAttribute.age;
		this.location = personAttribute.location;
	}
	speak(){
		return `Hello, my name is ${this.name}, I'm	from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(instructorAttribute){
		super(instructorAttribute);
		this.specialty = instructorAttribute.specialty;
		this.favLanguage = instructorAttribute.favLanguage;
		this.catchPhrase = instructorAttribute.catchPhrase;
	}
	demo(subject){
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject){
		return `${student.name} recieves a perfect score on ${subject}`;
	}
};

class Student extends Instructor {
	constructor(studentAttribute){
		super(studentAttribute);
		this.previousBackground = studentAttribute.previousBackground;
		this.className = studentAttribute.className;
		this.favSubjects = studentAttribute.favSubjects;
	}
	listSubjects(){
		return `${this.favSubjects}`;
	}
	PRAssignment(student, subject){
		return `${student.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(student, subject){
		return `${student.name} has begun sprint challenge on ${subject}`;
	}
};

class ProjectManager extends Student {
	constructor(projectManagerAttribute){
		super(projectManagerAttribute);
		this.gradClassName = projectManagerAttribute.gradClassName;
		this.favInstructor = projectManagerAttribute.favInstructor;
	}
	standUp(name, channel){
		return  `${name} announces to ${channel}, @channel standy times!`;
	}
	debugCode(name, student, subject){
		return `${name} debugs ${student.name}'s code on ${subject}`;
	}
};

const amy = new Person ({
  name: 'Amy',
  age: 22,
  location: 'LA',
});

const anna = new Person ({
  name: 'Anna',
  age: 23,
  location: 'SA',
});

const ali = new Person ({
  name: 'Ali',
  age: 24,
  location: 'VA',
});

const fred = new Instructor ({
  name: 'Fred',
  location: 'Berdock',
  age: 37,
  specialty: 'Front-end',
  favLanguage: 'JavaScript',
  catchPhrase: 'Dont forget the homies', 
});

const jackie = new Instructor ({
  name: 'Jack',
  location: 'New York',
  age: 35,
  specialty: 'Redux',
  favLanguage: 'Html',
  catchPhrase: 'Head . . . Shot',
});

const sharon = new Instructor ({
  name: 'Sharon',
  location: 'LA',
  age: 33,
  specialty: 'UX',
  favLanguage: 'Retro',
  catchPhrase: 'Get It Done',
});

const aby = new Student ({
	name: 'Abraham',
	age: 24,
	location: 'LA',
	gender: 'M',
	previousBackground: 'Student',
	className: 'Webpt11',
	favSubjects: 'Maths',
});

const eze = new Student ({
	name: 'Ezekiel',
	age: 22,
	location: 'VA',
	gender: 'M',
	previousBackground: 'Student',
	className: 'Webpt11',
	favSubjects: 'Economics',
});

const dory = new Student ({
	name: 'Dorian',
	age: 26,
	location: 'SA',
	gender: 'F',
	previousBackground: 'Student',
	className: 'Webpt11',
	favSubjects: 'English',
});

const ade = new ProjectManager ({
	name: 'Adele',
	age: 23,
	location: 'LA',
	gender: 'F',
	channel: 'Slack',
	gradClassName: 'CS1',
	favInstructor: 'Sean',
});

const derry = new ProjectManager ({
	name: 'Derrick',
	age: 23,
	location: 'LA',
	gender: 'M',
	channel: 'Slack',
	gradClassName: 'CS2',
	favInstructor: 'Joe',
});

const tom = new ProjectManager ({
	name: 'Tommy',
	age: 23,
	location: 'LA',
	gender: 'M',
	channel: 'Slack',
	gradClassName: 'CS3',
	favInstructor: 'Ira',
});

console.log(ali.name);
console.log(ali.speak());
fred.speak();
console.log(fred.demo('JavaScript'));
console.log(fred.grade(ali, 'Javascript IV'));
console.log(dory.listSubjects());
console.log(aby.PRAssignment(dory, 'Economics'));
console.log(dory.sprintChallenge(aby, 'Javascript II'));
console.log(tom.standUp('Derrick', 'Slack'));
console.log(tom.debugCode('Tommy', dory, 'JavaScript'));