// routes/apiRoutes.js
import { Router } from "express";
const router = Router();

import ApiLocalCtrl from '../Controller/apiLocal.controller.js';

router.post('/apirtnl', ApiLocalCtrl.consultaRTNl);
router.post('/ventaBrutal', ApiLocalCtrl.ventasBrutasl);

export default router;
