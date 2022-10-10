const fs = require('fs')
const path = require('path')

const products = 'productos.json'
const readProducts = async () => {
    const data = await fs.promises.readFile(products, 'utf-8')
    return JSON.parse(data)
}
const newProduct = async (productData) => {
    const renderData = JSON.stringify(productData, null, '\t')
    await fs.promises.writeFile(products, renderData)

}
const getAll = async () => {
    const productData = await readProducts()
    return productData

}

const getById = async (id) => {
    const productData = await readProducts()
    const indice = productData.findIndex((product) => product.id === id)

    if (indice < 0) {
        throw new Error('El producto no existe')
    };

    return productData[indice]
}

const deleteAll = () => {
    newProduct([])
}
const deleteById = async (id) => {
    const productData = await readProducts()
    const indice = productData.findIndex((product) => product.id === id)

    if (indice < 0) {
        return;
    }

    productData.splice(indice, 1)
    newProduct(productData)

}


const save = async (data) => {

    if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('producto invalido');

    const productData = await readProducts()
    const product = {
        title: data.title,
        price: data.price,
        id: productData[productData.length - 1].id + 1
    }

    productData.push(product)
    newProduct(productData)
}
getAll().then((data) => {
    console.log(data);
})
save(
    {
        title: "playera",
        price: 32.4,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    }
);