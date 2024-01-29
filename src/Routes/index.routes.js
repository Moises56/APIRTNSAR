import { Router } from "express";

const router = Router();

import IndexCtrl from "../Controller/IndexPage.controller.js";
import { verifyToken } from "../Middlewares/authJwt.js";

// Routes
// import indexRoutes from "./Routes/index.routes.js";

// Ruta para guardar el registro con la subida de archivos
router.get("/home", verifyToken, IndexCtrl.IndexPage);



router.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });
  
  router.get("/about", (req, res) => {
    res.json({ message: "about." });
});

router.get("/contact", (req, res) => {
    res.json({ message: "contact." });
  });

router.get("/sector", verifyToken, IndexCtrl.SectorGet);
router.get("/subsector/:sectorID", verifyToken, IndexCtrl.SubSectorGet);
router.get("/actividad/:subSectorID",verifyToken, IndexCtrl.ActividadGet);
router.get("/act/:actividadID", verifyToken, IndexCtrl.ActividadGetId);
// guardar SaveSolicitud
router.post("/save", verifyToken, IndexCtrl.SaveSolicitud);
router.get("/solicitud", verifyToken, IndexCtrl.SolicitudGet);
router.get("/solicitud/:idSol", verifyToken, IndexCtrl.SolicitudGetId);
router.put("/solicaprovada/:idSol", verifyToken, IndexCtrl.SolicitudAprovada);


// /send email
router.post("/sendemail/:email/send", verifyToken, IndexCtrl.sendEmail);


export default router;