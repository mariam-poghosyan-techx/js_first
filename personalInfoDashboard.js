// information
const firstName = "Mariam";
const lastName = "Poghosyan";
const birthYear = 2003;
const currentYear = 2025;
const isStudent = false;
const hobbies = ['listening to music', 'hiking', 'Armenian folk dances']
let contact = {
  email: 'mariam.poghosyan.techx@gmail.com',
  phone: '+374 93 22-07-67',
  city: 'Yerevan',
};

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
  ;
}

// Type Coercion & Comparison

ageString = "25";
ageNumber = 25;

ageString == ageNumber;
ageString === ageNumber;

console.log("comparison with ==", ageString == ageNumber);
console.log("comparison with ===", ageString === ageNumber);

console.log("Type of string:", typeof ageString);
console.log("Type of number:", typeof ageNumber);

// score detector
let score = 95;
let grade = ''
if (score >= 90 && score <= 100) {
  grade = "A"
} else if (score >= 80 && score <= 89) {
  grade = "B"
} else if (score >= 70 && score <= 79) {
  grade = "C"
} else if (score >= 60 && score <= 69) {
  grade = "D"
} else if (score >= 0 && score <= 60) {
  grade = "F"
}
let correctGrade = grade ? grade : "Invalid score"
console.log("Grade:", correctGrade);

// grade identification
switch (grade) {
  case "A":
    console.log("Excellent work!")
    break;
  case "B":
    console.log("Good job!")
    break;
  case "C":
    console.log("Keep improving.")
    break;
  case "D":
    console.log("Try harder.")
    break;
  case "F":
    console.log("Needs serious effort.")
    break;

  default:
    console.log("Invalid value");

};

// Results
let result = (grade === "A" || grade === "B" || grade === "C") ? "You passed" : grade === "D" || grade === "F" ? "You Failed" : "Invalid grade";
console.log(result);
