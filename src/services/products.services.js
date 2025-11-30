import { agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../models/products.models.js";

//GET ALL PRODUCTS
export const getAllProductsService = async () => {
    return (
        new Promise(async (res, rej) => {
            console.log("test2 dentro de servicio")
            try {
                const productos = await obtenerProductos()
                res(productos);
            } catch (error) {
                rej()
            }
        })
    )
};

//GET PRODUCT BY ID
export const getProductByIdService = async (id) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const product = await obtenerProducto(id)
                res(product)
            } catch (error) {
                rej(error)
            }
        })
    )
};

//POST PRODUCT
export const addProductService = async (product) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const newProduct = await agregarProducto(product)
                res(newProduct)
            } catch (error) {
                rej(error)
            }
        })
    )
}

//DELETE PRODUCT
export const deleteProductService = async (id) => {
    console.log(id)
    return (
        new Promise(async (res, rej) => {
            try {
                await eliminarProducto(id)
                console.log("despues de eliminar el producto")
                res()
            } catch (error) {
                rej(error)
            }
        })
    )
}

/*
//PUT PRODUCT
export const editProductService = async (id, product) => {
  return(
    new Promise(async (res, rej) => {
      try{
        const newProduct = await actualizarProducto(id, product)
        res(newProduct)
      }catch(error){
        rej(error)
      }
    })
  )
}*/