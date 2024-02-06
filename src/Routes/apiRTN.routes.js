// routes/apiRoutes.js
import { Router } from "express";
const router = Router();

import apiController from '../Controller/constRTN.controller.js';
import { verifyToken } from "../Middlewares/authJwt.js";

router.post('/apirtn', apiController.consultaRTN);
router.post('/ventaBruta', apiController.ventasBrutas);
router.post('/sumaVentaBruta', apiController.saveVentasBrutas);
router.get('/getSumaVVB', apiController.getVentasBrutas);
router.get('/getSumaVVB/:idUser', apiController.getVentasBrutasById);

export default router;
