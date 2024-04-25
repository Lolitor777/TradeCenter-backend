import express from 'express'
import { PORT } from './config.js'
import cors from 'cors'
import db from './database/db.js';
import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'

const app = express();

app.use( cors() );
app.use( express.json() );

app.use( '/api/user', userRoutes );
app.use( '/api/product', productRoutes );


try {

    await db.authenticate();
    console.log('Conexión exitosa con la base de datos');

} catch ( error ) {

    console.log( error );
    console.log('Error al conectar con la base de datos');

}


app.listen(PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`);
})