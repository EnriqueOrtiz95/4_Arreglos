let model = require('./student')

let students = [];

let student = {
    name: "Enrique Ortiz Lora",
    controlNumber: "16400967",
    email: "enortizlo@ittepic.edu.mx",
    grade: 88
};

let student2 = {
    name: "Denisse Lora Estrada",
    controlNumber: "12400187",
    email: "deloraes@ittepic.edu.mx",
    grade: 91
};

let student3 = {
    name: "Martin Cooper",
    controlNumber: "7400187",
    email: "marcooper@ittepic.edu.mx",
    grade: 102
};

students = model.create(student, students)
students = model.create(student2, students)
students = model.create(student3, students)
console.log("AL momento de insertar -----------------")
model.read(students)


students = model.eraseNC("12400187",students)
console.log("Despus de borrar -----------------")

console.log("Despus de actualizar -----------------")

model.read(students)
students = model.update(0,{name:"Hugo Chavez",controlNumber:"9975100",email:"huchavez@ittepic.edu.mx",grade:"20"},students)
model.read(students)


//students.push(student2)
//console.log(students[0])