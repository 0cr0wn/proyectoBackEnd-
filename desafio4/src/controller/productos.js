const { v4: uuidv4 } = require('uuid')

class ProductsAPI {
    constructor() {
        this.productos = [
            {
                id: uuidv4(), title: 'remera', price: 20
            }, { id: uuidv4(), title: 'camisa', price: 22 }
        ];
    }

    exist(id) {
        const indice = this.productos.findIndex(aProduct => aProduct.id == id)
        return indice >= 0

    }

    getAll() {
        return this.productos
    }

    getById(id) {
        const exist = this.exist(id)

        if (!exist) throw new Error('el producto no existe');

        const indice = this.productos.findIndex(aProduct => aProduct.id == id)

        return this.productos[indice]
    }

    save() {
        return 'get all products'
    }

    findByIdAndUpdate() {
        return 'get all products'
    }

    findByIdAndDelete() {
        return 'get all products'
    }

}

const instanciaProductsAPI = new ProductsAPI()

module.exports = {
    ProductsController: instanciaProductsAPI
}
