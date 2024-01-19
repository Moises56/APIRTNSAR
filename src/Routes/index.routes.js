import { Router } from "express";

const router = Router();

import IndexCtrl from "../Controller/IndexPage.controller.js";

// Routes
// import indexRoutes from "./Routes/index.routes.js";

// Ruta para guardar el registro con la subida de archivos
router.get("/home", IndexCtrl.IndexPage);



router.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });
  
  router.get("/about", (req, res) => {
    res.json({ message: "about." });
});

router.get("/contact", (req, res) => {
    res.json({ message: "contact." });
  });

router.get("/sector", IndexCtrl.SectorGet);
router.get("/subsector/:sectorID", IndexCtrl.SubSectorGet);
router.get("/actividad/:subSectorID", IndexCtrl.ActividadGet);
router.get("/act/:actividadID", IndexCtrl.ActividadGetId);
// guardar SaveSolicitud
router.post("/save", IndexCtrl.SaveSolicitud);
router.get("/solicitud", IndexCtrl.SolicitudGet);
router.get("/solicitud/:idSol", IndexCtrl.SolicitudGetId);
router.put("/solicaprovada/:idSol", IndexCtrl.SolicitudAprovada);


// /send email
router.post("/sendemail/:email/send", IndexCtrl.sendEmail);


export default router;