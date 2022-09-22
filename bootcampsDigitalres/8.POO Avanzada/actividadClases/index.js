// Crear una funcion constructora maestra Person(name)
// Crear una function constructora hija de Person => Student(course)
// Crear una funcion constructora hija de Person => Teacher(studentQuantity)
// Crear el prototipo y con el prototipo llenan los campos del html

/**
 * Mejoras propuestas para el lunes
 * 1. Agregar un metodo a Person que permita agregar una nueva persona 
 * en el html cada que se cree mediante un new
 * 2. Agregar un metodo a person que se pueda heredar y agregar el nombre
 * a la persona que se agregó en el punto 1
 * 3. Agregar un metodo a Student que permita agregar el curso
 * al estudiante que se creo mediante el punto 1
 * 4. Agregar un metodo a Teacher que permita agregar la cantidad de estudiantes
 * al profesor que se creo mediante el punto 1
 * 5. Definir un listado de estudiantes y uno de profesores
 * 6. Recorrer los listados y utilizando los metodos creados y las diferentes funciones
 * constructoras agregarlos y mostrarlos en pantalla
 * 
 * !!!!! Para realizar lo propuesto se deberan agregar algunas propiedades a los objetos
 * Person, Student y Teacher, agreguen tantas como consideren necesarias !!!!
 * !!!! La idea de este ejercicio que generen el html de forma dinamica cuando agreguen 
 * una nueva persona (estudiante o profesor) !!!! 
*/


function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getName = function(){
	return this.name;
}

function Student(name, course) {
	Person.call(this, name, 30);
	this.course = course;
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

function Teacher(name, studentQuantity) {
	Person.call(this, name)
	this.studentQuantity = studentQuantity;
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher

const student = new Student('Ayelen', 'Js Avanzado')
const teacher = new Teacher('Diego', 40)

/*document.getElementById('student-name').innerHTML = student.name
document.getElementById('student-course').innerHTML = student.course

document.getElementById('teacher-name').innerHTML = teacher.name
document.getElementById('teacher-student-quantity').innerHTML = teacher.studentQuantity*/


