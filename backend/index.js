import express from 'express';
import route from './Routes/Routes.js';
import cors from 'cors';
import tiposObjetosRoutes from './Routes/RoutesTiposObjetos.js'; 


const host = '0.0.0.0';
const port = 4000;

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/objeto', route); 
app.use('/tiposObjetos', tiposObjetosRoutes);


app.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});
