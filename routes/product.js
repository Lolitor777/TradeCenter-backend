import Router from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.js';

const router = Router();

router.get( '/consultarProductos', getProducts );
router.get( '/consultarProductoPorId', getProductById );
router.post( '/crearProducto', createProduct );
router.put( '/actualizarProducto', updateProduct );
router.delete( '/eliminarProducto', deleteProduct );


export default router;