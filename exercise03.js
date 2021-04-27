let person = {
   firstName: "Snow",
   lastName: "White",
   isFiction: true,
   age: 18,
   address: {
      streetAddress: "7 Fairytale Lane",
      city: "Fairytale Forest"
   },
   phoneNumbers:[
      {
         type: "home",
         number: "01 123-4567"
      },
      {
         type: "office",
         number: "01 555-4567"
      },
      {
         type: "mobile",
         number: "028 456-7890"
      }
   ],
   spouse: null
} 

let student = {
      name:"Pratik Jivanji",
      id:"776514473",
      username:"pjiv657",
      majors:["CompSci", "InfoSys"],
      degress:["BSc", "BCom"]
}
student.AddMajor = function(major){
     this.majors.push(major);
};
let roster = {
   students : [student],
}
roster.AddStudent = function(student){
   this.students.push(student)  
}
let student2 = {
      name:"Liona sadler",
      id:"602083853",
      username:"lsad313",
      majors:["Asian studies", "InfoSys", "Chinese"],
      degress:["BCom", "BA"]
}


let course = {
   title:"Information Systems",
   category:"Commerce",
   categoryNumber:"221",
   shortDescription:"Programming for business",
   offeredDate:"Sem 1 2021"
}

// print different properties of your objects
console.log("First name of person: " + person.firstName);
var i;
for (i in person.phoneNumbers) {
    console.log("Phone number: " + person.phoneNumbers[i].number);
}
console.log("Students: "+ roster.students[0].name);
roster.AddStudent(student2);
console.log("Students: " + roster.students[0].name + ", " + roster.students[1].name);
console.log("Majors: "+ student.majors);
console.log("Add major: 'Geography'");
roster.students[0].AddMajor("Geography");
console.log("Majors: " + roster.students[0].majors);
