import { Router } from "express";
import TiposObjetosController from "../control/TiposObjetosController.js";

const router = Router();
const ctrl = new TiposObjetosController();

router.get('/', ctrl.consultar);

export default router;
