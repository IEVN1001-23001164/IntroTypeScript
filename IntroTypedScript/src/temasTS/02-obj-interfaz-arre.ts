
interface IAlumno{
    nombre: string,
    apellido:string,
    edad: number,
    email: string,
    nota?: number
}

const alumno:IAlumno={
nombre:'Mario',
apellido:'Rangel',
edad:20,
email:'mario@gmail.com',
nota:5
}

console.log(alumno)

let mascotas=['perro','gato','perico']
console.log(mascotas)
mascotas[1]='Nuevo Gato'
console.log(mascotas)
mascotas.push('Leon')
console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(67)
tem.push('six seven')
console.log(tem)

