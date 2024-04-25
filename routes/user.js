import { Router } from 'express';
import { createUser, getUser, login, logout, renewToken, updateUser } from '../controllers/user.js';
import validateToken from '../middalware/validateJWT.js';

const router = Router();

router.get( '/consultarUsuario/:id', getUser );
router.post( '/crearUsuario', createUser );
router.post( '/login', login );
router.post( '/logout', validateToken, logout );
router.put( '/actualizarUsuario', updateUser );
router.put( '/renovarToken', validateToken, renewToken );


export default router;