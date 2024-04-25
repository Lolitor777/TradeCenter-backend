import { Router } from 'express';
import { createUser, getUser } from '../controllers/user.js';

const router = Router();

router.get('/consultarUsuario', getUser );
router.post('/crearUsuario', createUser );