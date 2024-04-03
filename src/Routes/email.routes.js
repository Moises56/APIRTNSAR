import { Router } from "express";
const router = Router();

import EmailCtrl from "../Controller/email.controller.js";


router.post('/send', EmailCtrl.sendEmail);


export default router;
