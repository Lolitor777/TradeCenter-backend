import { response } from "express";
import User from '../models/User.js'
import { generateToken } from "../helpers/jwt.js";


export const getUser = async( req, res = response ) => {

    const { id } = req.params;

    try {

        const user = await User.findByPk( id );

        res.status(200).json({
            ok: true,
            user
        })
        
    } catch (error) {

        console.log( error );
        res.status(400).json({
            ok: false,
            msg: `No se puede encontrar el usuario con el id ${ id }`
        })
    }

}


export const createUser = async( req, res = response ) => {

    const { name, lastName, email, password, address } = req.body;
    
    try {

        const validateEmail = await User.findOne({
            where: {
                email
            }
        })
        
        if ( !validateEmail ) {
            
            const user = await User.create({ name, lastName, email, password, address });

            const token = generateToken( user.id, user.name );

            return res.status(200).json({
                id: user.id,
                ok: true,
                msg: 'El usuario fué creado correctamente',
                token 
            });
        }
        else {
            return res.status(200).json({
                ok: true,
                msg: `El usuario con el correo electrónico ${ email } ya existe.`
            });
        }
        
    } catch ( error ) {

        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al crear usuario'
        })
    }
}


export const login = async( req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({
            where: {
                email
            }
        })

        if ( !user ) {
            return res.status(200).json({
                ok: false,
                msg: `El correo electrónico ${email} no existe.`
            })
        }

        if ( password != user.password ) {
            return res.status(200).json({
                ok: false,
                msg: `La contraseña es incorrecta.`
            })
        }

        const token = await generateToken( user.dataValues.id, user.dataValues.name );

        res.status(200).json({
            ok: true,
            user,
            token
        })
        
    } catch (error) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al iniciar sesión'
        })
    }
}


export const logout = async( req, res = response ) => {

    try {

        res.status(200).json({
            ok: true,
            msg: 'Se ha cerrado sesión'
        })
        
    } catch ( error ) {
        console.log( error );
        res.status(400).json({
            ok: false,
            msg: 'Error al cerrar sesión'
        })
    }
}


export const renewToken = async( req, res = response ) => {

    const { id, name } = req;

    const user = await User.findByPk( id );

    if ( !user ) {
        res.status(200).json({
            ok: false,
            msg: 'El usuario no existe.'
        })
    }

    return res.json({
        ok: true,
        msg: 'Token validado'
    })


}


export const updateUser = async( req, res = response ) => {

    const { id, name, lastName, email, password, address } = req.body;

    try {

        const validateEmail = await User.findOne({
            where: {
                email
            }
        });

        if ( !validateEmail ) {
            
            await User.update({ name, lastName, email, password, address }, {
                where: {
                    id
                }
            });

            return res.status(200).json({
                ok: true,
                msg: 'Información actualizada'
            });
        }
        else {
            return res.status(200).json({
                ok: false,
                msg: `El correo electrónico ${ email } ya existe.`
            })
        }
        
    } catch (error) {
        
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al actualizar la información'
        })
    }
}