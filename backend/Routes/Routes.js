import { Router } from 'express';
import ObjetoController from '../control/ObjetoController.js';
import tiposObjetosRoutes from './RoutesTiposObjetos.js';


const route = Router();
const ctrl = new ObjetoController();

route.post('/', ctrl.insert);
route.get('/', ctrl.consult);
route.put('/:codigo', ctrl.alter);
route.patch('/:codigo', ctrl.alter);
route.delete('/:codigo', ctrl.delete);
route.use('/tiposObjetos', tiposObjetosRoutes);


export default route;
