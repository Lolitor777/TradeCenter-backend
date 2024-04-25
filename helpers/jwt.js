import jwt from 'jsonwebtoken';

export const generateToken = ( id, name ) => {

    return new Promise(( resolve, reject ) => {

        const payload = { id, name };

        jwt.sign( payload, `${process.env.PRIVATE_KEY}`, 
        {
            expiresIn: '72h'
        }, 
        ( err, token ) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
                resolve( token )
        })         
    }
)}