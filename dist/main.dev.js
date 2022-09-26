"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(nombre, apellido, libros, mascotas) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  _createClass(Usuario, [{
    key: "getFullName",
    value: function getFullName() {
      return console.log("El nombre completo del usuario es: ".concat(this.nombre, " ").concat(this.apellido));
    }
  }, {
    key: "addMascota",
    value: function addMascota(mascota) {
      this.mascotas.push(mascota);
    }
  }, {
    key: "countMascotas",
    value: function countMascotas() {
      return this.mascotas.length;
    }
  }, {
    key: "getCantidadMascotas",
    value: function getCantidadMascotas(cantMascotas) {
      return console.log("Tiene ".concat(cantMascotas, " mascotas"));
    }
  }, {
    key: "addBook",
    value: function addBook(nombre, autor) {
      this.libros.push({
        nombre: nombre,
        autor: autor
      });
    }
  }, {
    key: "getBookNames",
    value: function getBookNames() {
      var arrayNombreLibros = [];
      this.libros.forEach(function (libro) {
        return arrayNombreLibros.push(libro.nombre);
      });
      return arrayNombreLibros;
    }
  }, {
    key: "showBookNames",
    value: function showBookNames(nombreLibros) {
      nombreLibros.forEach(function (nombre) {
        console.log("El nombre del libro es: ".concat(nombre));
      });
    }
  }]);

  return Usuario;
}();

var usuario = new Usuario('Roberto', 'Gonzales', [{
  nombre: 'el alquimista',
  autor: 'Paulo Cohello'
}, {
  nombre: 'Don Quijote de la Mancha',
  autor: 'Miguel Cervantes'
}], ['perro', 'gato', 'tortuga']); //test 

usuario.getFullName();
usuario.addMascota("araña");
var cantMascotas = usuario.countMascotas();
usuario.getCantidadMascotas(cantMascotas);
usuario.addBook("Harry Potter", "J.K.Rowling");
var arrayNombreLibros = usuario.getBookNames();
usuario.showBookNames(arrayNombreLibros);