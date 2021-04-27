function create(student, students) {
    students.push(student)
    return students
}

function read(students){
    students.forEach(s => {
        console.log("Nombre: " +s.name)
        console.log("Num. de control: " +s.controlNumber)
    });
}

function erase(pos, students){
    students.splice(pos)
    //TAREA: BORRAR A TRAVES DEL NUMERO DE CONTROL(NUEVO METODO)
    return students
}
function eraseNC(nc, students){
    students.splice(students[nc],1)
    return students
}

function update(pos, newElement, students){
    students[pos] = newElement
    //TAMBIEN DE TAREA ACTUALIZAR A TRAVES DEL NUMEROCONTROL UNICAMENTE LOS
    //CAMPOS QUE REQUIERE CAMBIAR EL USUARIO
    return students
}
function readNC(students){
    students.forEach(s => {
        return s.controlNumber;
    });
    
}
function updateNC(pos, students){
    student.splice(students[pos],1,students[name],students[controlNumber],students[email],students[grade])
    return students
}

function upper70(students){
    return students[grade] > 70
}

module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.eraseNC = eraseNC;
module.exports.update = update;
module.exports.readNC = readNC;
module.exports.updateNC = updateNC;
module.exports.upper70 = upper70;