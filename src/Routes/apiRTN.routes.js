// routes/apiRoutes.js
import { Router } from "express";
const router = Router();

import apiController from '../Controller/constRTN.controller.js';

router.post('/apirtn', apiController.consultaRTN);
router.post('/ventaBruta', apiController.ventasBrutas);
router.post('/sumaVentaBruta', apiController.saveVentasBrutas);

export default router;
