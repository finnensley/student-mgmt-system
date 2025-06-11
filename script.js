// need a list of students
const students = [];

//function to add students to array
function addStudent(name, grade) {
    students.push ({
        name,
        grade,
    })
}

// function to remove students from array
function removeStudent(name) {
    const index = students.findIndex((student) => student.name === name);
    if(index !== -1) { //meaning it is in the list
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else {
        console.log(name, "was not found");
    }
}

// function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList(){
    return students.map((student) => `${student.name} - Grade: ${student.grade}`);
}

// add students
addStudent("Alice", 85);
addStudent("Bob", 90);
addStudent("Davy", 60);
addStudent("Charles", 78);
addStudent("Emma", 92);

//start
console.log("students =", students);
console.log("STUDENT LIST:");
console.log(formatStudentList());

removeStudent("Charles");

console.log("STUDENT LIST:");
console.log(formatStudentList());

console.log("Students with an 80 or above");
console.log(filterTopStudents(80));