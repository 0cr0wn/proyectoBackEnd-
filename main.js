class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(
            `El nombre completo del usuario es: ${this.nombre} ${this.apellido}`
        );
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    getCantidadMascotas(cantMascotas) {
        return console.log(`Tiene ${cantMascotas} mascotas`);
    }

    addBook(nombre, autor) {
        this.libros.push({
            nombre: nombre,
            autor: autor,
        });
    }

    getBookNames() {
        let arrayNombreLibros = [];
        this.libros.forEach((libro) => arrayNombreLibros.push(libro.nombre));
        return arrayNombreLibros;
    }

    showBookNames(nombreLibros) {
        nombreLibros.forEach((nombre) => {
            console.log(`El nombre del libro es: ${nombre}`);
        });
    }
}

const usuario = new Usuario('Roberto', 'Gonzales', [{
    nombre: 'el alquimista',
    autor: 'Paulo Cohello'
}, {
    nombre: 'Don Quijote de la Mancha',
    autor: 'Miguel Cervantes'
}], ['perro', 'gato', 'tortuga']);


//test 

usuario.getFullName();
usuario.addMascota("araña");
let cantMascotas = usuario.countMascotas();
usuario.getCantidadMascotas(cantMascotas);
usuario.addBook("Harry Potter", "J.K.Rowling");
let arrayNombreLibros = usuario.getBookNames();
usuario.showBookNames(arrayNombreLibros);

