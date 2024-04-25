import { response } from 'express';
import Product from '../models/Product.js';


export const getProducts = async( req, res = response ) => {

    try {

        const product = await Product.findAll()

        res.status(200).json({
            ok: true,
            product
        })
        
    } catch (error) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al consultar los productos.'
        })
    }
}


export const getProductById = async( req, res = response ) => {
    
    const { id } = req.params;

    try {

        const product = await Product.findByPk( id );

        res.status(200).json({
            ok: true,
            product
        })
        
    } catch (error) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: `Error al consultar el producto con el id ${id}`
        })
    }
}


export const createProduct = async( req, res = response ) => {

    const {
        name,
        description,
        price,
        image_1,
        image_2,
        image_3,
        minStock,
        maxStock,
        currentStock
    } = req.body;

    try {

        await Product.create({
            name,
            description,
            price,
            image_1,
            image_2,
            image_3,
            minStock,
            maxStock,
            currentStock
        });

        res.status(200).json({
            ok: true,
            msg: 'El producto se ha creado con éxito.'
        })
        
    } catch (error) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al crear producto'
        })
    }


}


export const updateProduct = async( req, res = response ) => {

    const { id } = req.params;
    const { 
        name,
        description,
        price,
        image_1,
        image_2,
        image_3,
        minStock,
        maxStock,
        currentStock } = req.body;

    try {

        await Product.update({
            name,
            description,
            price,
            image_1,
            image_2,
            image_3,
            minStock,
            maxStock,
            currentStock 
        }, 
        {
            where: {
                id
            }
        });

        res.status(200).json({
            ok: true,
            msg: 'La información del producto se ha actualizado correctamente.'
        })
        
    } catch (error) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al actualizar la información del producto.'
        })
    }
}


export const deleteProduct = async( req, res = response ) => {

    const { id } = req.params;

    try {

        await Product.destroy({
            where: {
                id
            }
        })

        res.status(200).json({
            ok: true,
            msg: 'El producto se ha eliminado correctamente.'
        })
        
    } catch (error) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al eliminar el producto'
        })
    }
    
}
 