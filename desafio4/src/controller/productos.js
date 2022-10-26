const { v4: uuidv4 } = require('uuid')
const CreateError = require('http-errors')

class ProductsAPI {
    constructor() {
        this.productos = [
            {
                title: 'remera', price: 20, icon: 'https://as2.ftcdn.net/v2/jpg/03/21/98/71/1000_F_321987179_mJndthZlqmXBXAAYOXE6pMJaHVlqxufa.jpg', id: 1
            },
            {
                title: 'camisa', price: 22, icon: 'https://as2.ftcdn.net/v2/jpg/04/43/61/87/1000_F_443618716_JCLtTG0HQ7DzsWrWHNQuUxC4HeqUhs5u.jpg', id: 2
            },
            {
                title: 'pantalon', price: 35, icon: 'https://as1.ftcdn.net/v2/jpg/00/61/87/62/1000_F_61876261_FUoySFWEGESVVmMuqJidqri9r5hA0ln5.jpg', id: 3
            }
        ];
    }

    exist(id) {
        const indice = this.productos.findIndex(aProduct => aProduct.id == id)
        return indice >= 0

    }

    validateBody(data) {
        if (!data.title || !data.price || !data.icon || typeof data.title !== 'string' || typeof data.price !== 'number' || typeof data.icon !== 'string') throw CreateError(400, 'datos invalidos')

    }

    getAll() {
        return this.productos
    }

    getById(id) {
        const exist = this.exist(id)

        if (!exist) throw CreateError(404, 'el producto no existe');

        const indice = this.productos.findIndex(aProduct => aProduct.id == id)

        return this.productos[indice]
    }

    save(data) {
        this.validateBody(data)
        const arrProduct = this.productos
        try {
            const nuevoProdcuto = {

                title: data.title,
                price: data.price,
                icon: data.icon,
                id: arrProduct[arrProduct.length - 1].id + 1
            };



            this.productos.push(nuevoProdcuto);
            return nuevoProdcuto;
        } catch (error) {
            throw new Error(
                "Hubo un problema al guardar el producto.",
                error
            );
        }

    }

    findByIdAndUpdate(id, newData) {
        const exist = this.exist(id)

        if (!exist) throw CreateError(404, 'el producto no existe');
        this.validateBody(newData)
        const indice = this.productos.findIndex(aProduct => aProduct.id == id)

        const oldProduct = this.productos[indice]
        const nuevoProdcuto = {

            title: newData.title,
            price: newData.price,
            icon: newData.icon,
            id: oldProduct.id
        };

        this.productos.splice(indice, 1, nuevoProdcuto)

        return nuevoProdcuto


    }

    findByIdAndDelete(id) {
        const exist = this.exist(id)

        if (!exist) return;

        const indice = this.productos.findIndex(aProduct => aProduct.id == id)

        this.productos.splice(indice, 1)

    }

}

const instanciaProductsAPI = new ProductsAPI()

module.exports = {
    ProductsController: instanciaProductsAPI
}
