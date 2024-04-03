// routes/apiRoutes.js
import { Router } from "express";
const router = Router();

import apiController from '../Controller/constRTN.controller.js';
import { verifyToken } from "../Middlewares/authJwt.js";

router.post('/apirtn', apiController.consultaRTN);
router.post('/ventaBruta', apiController.ventasBrutas);
router.post('/sumaVentaBruta', apiController.saveVentasBrutas);
router.post('/getSumaVVB', apiController.getVentasBrutas);
router.post('/getSumaVVB/:idUser', apiController.getVentasBrutasById);
// obtener los datos de la tabla amdc_datos  pasandole el RTN
router.post('/getAmdcDatos', apiController.getAmdcDatos);

router.post('/getAmdcDatoscS', apiController.getAmdcDatoscS);


export default router;
