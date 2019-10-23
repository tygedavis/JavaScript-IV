// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }//this closes constructor
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }    
}//this closes Person

const Fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
});

console.log(Fred);
console.log(Fred.speak());

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty,
        this.favLanguage = attrs.favLanguage,
        this.catchPhrase = attrs.catchPhrase
    }//this closes constructor
    demo(subject){
        return `Today we are learning about ` + subject;
    }
    grade(student, subject){
        return student + ` receives a perfect score on ` + subject;
    }
}//this closes Instructor

const Jamie = new Instructor({
    name: 'Jamie',
    age: 27,
    location: 'New York',
    specialty: 'Full Stack Web Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Great Scott!'
});

console.log(Jamie);
console.log(Jamie.demo('math'));
console.log(Jamie.grade('Tyge','math'))

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground,
        this.className = attrs.className,
        this.favSubjects = attrs.favSubjects
    }//this closes constructor
    listsSubjects(){
        return `${this.favSubjects}`;
    }//this closes listsSubjects
    PRAssignment(subject){
        return `${this.name} has submitted a PR assignment for ` + subject;
    }//this closes PRAssignment
    sprintChallenge(subject){
        return  `${this.name} has begun sprint challenge on ` + subject;
    }//this closes sprintChallenge
}//this closes Student

const Tyge = new Student({
    name: 'Tyge',
    age: 21,
    location: 'Utah',
    previousBackground: 'translator',
    className: 'WEB25',
    favSubjects: 'CSS and LESS'
});

console.log(Tyge);
console.log(Tyge.listsSubjects());
console.log(Tyge.PRAssignment('JavaScript IV'));
console.log(Tyge.sprintChallenge('JavaScript Fundementals'));

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName,
        this.favInstructor = attrs.favInstructor
    }//this closes constructer
    standUp(channel){
        return `${this.name} announces to ` + channel + `, @channel standy times!`;
    }//this closes standUp
    debugsCode(student, subject){
        return `${this.name} debugs ` + student + `'s code on ` + subject;
    }
}//this closes PRojectManager

const Madelyn = new ProjectManager({
    name: 'Madelyn',
    age: 26,
    location: 'Salt Lake City',
    specialty: 'Everything',
    favLanguage: 'Java',
    catchPhrase: 'I was like........',
    gradClassName: 'WEB13',
    favInstructor: 'Britt'
});

console.log(Madelyn);
console.log(Madelyn.standUp('WEB25'));
console.log(Madelyn.debugsCode('Tyge', 'HTML'));
console.log(Madelyn.speak());