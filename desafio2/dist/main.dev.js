"use strict";

var fs = require('fs');

var path = require('path');

var products = 'productos.json';

var readProducts = function readProducts() {
  var data;
  return regeneratorRuntime.async(function readProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fs.promises.readFile(products, 'utf-8'));

        case 2:
          data = _context.sent;
          return _context.abrupt("return", JSON.parse(data));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var newProduct = function newProduct(productData) {
  var renderData;
  return regeneratorRuntime.async(function newProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          renderData = JSON.stringify(productData, null, '\t');
          _context2.next = 3;
          return regeneratorRuntime.awrap(fs.promises.writeFile(products, renderData));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getAll = function getAll() {
  var productData;
  return regeneratorRuntime.async(function getAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(readProducts());

        case 2:
          productData = _context3.sent;
          return _context3.abrupt("return", productData);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var getById = function getById(id) {
  var productData, indice;
  return regeneratorRuntime.async(function getById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(readProducts());

        case 2:
          productData = _context4.sent;
          indice = productData.findIndex(function (product) {
            return product.id === id;
          });

          if (!(indice < 0)) {
            _context4.next = 6;
            break;
          }

          throw new Error('El producto no existe');

        case 6:
          ;
          return _context4.abrupt("return", productData[indice]);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var deleteAll = function deleteAll() {
  newProduct([]);
};

var deleteById = function deleteById(id) {
  var productData, indice;
  return regeneratorRuntime.async(function deleteById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(readProducts());

        case 2:
          productData = _context5.sent;
          indice = productData.findIndex(function (product) {
            return product.id === id;
          });

          if (!(indice < 0)) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return");

        case 6:
          productData.splice(indice, 1);
          newProduct(productData);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var save = function save(data) {
  var productData, product;
  return regeneratorRuntime.async(function save$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!(!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number')) {
            _context6.next = 2;
            break;
          }

          throw new Error('producto invalido');

        case 2:
          _context6.next = 4;
          return regeneratorRuntime.awrap(readProducts());

        case 4:
          productData = _context6.sent;
          product = {
            title: data.title,
            price: data.price,
            id: productData[productData.length - 1].id + 1
          };
          productData.push(product);
          newProduct(productData);

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
};

getAll().then(function (data) {
  console.log(data);
});
save({
  title: "playera",
  price: 32.4,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
});