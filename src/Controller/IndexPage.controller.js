const IndexCtrl = {};


import Sector from '../Model/Sector.js';
import SubSector from '../Model/SubSector.js';
import Actividad from '../Model/Actividad.js';
import Solicitud from '../Model/Solicitud.js';

import transporter from '../helpers/mailer.js';

import mongoose from 'mongoose';


IndexCtrl.IndexPage = async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'IndexCtrl Home Page'
    });
};

// mostra todos los sectores
IndexCtrl.SectorGet = async (req, res) => {
    try {
        const sector = await Sector.find();
        console.log('sectores: ', sector)
        res.json(sector);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//obtener el sub-sector  pasandole el sectorID
IndexCtrl.SubSectorGet = async (req, res) => {
    try {
        const { sectorID } = req.params;
        console.log(sectorID)
        const subsector = await SubSector.find({ SectorID: sectorID });
        console.log('subsectores: ', subsector)
        res.json(subsector);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//obtener la actividad pasandole el subsectorID
IndexCtrl.ActividadGet = async (req, res) => {
    try {
        const { subSectorID } = req.params;
        console.log(subSectorID)
        const actividad = await Actividad.find({ SubSectorId: subSectorID });
        console.log('actividades: ', actividad)
        res.json(actividad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//obtener la actividad pasandole el id de la actividad

IndexCtrl.ActividadGetId = async (req, res) => {
    try {
        const { actividadID } = req.params;
        const actividad = await Actividad.findById(actividadID);
        res.json(actividad)


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// guardar  formulario con los siguienres datos: dni,solicitante,proyecto,correo,telefono,direccion,sector,subsector,actividad,unidad,categoria,descripcion,unidades,observacion
IndexCtrl.SaveSolicitud = async (req, res) => {
    try {
        const { apoderado, dni, solicitante, proyecto, correo, telefono, direccion, sector, subsector, actividad, unidad, categoria, descripcion, unidades, observacion } = req.body;
        const actividadPost = new Solicitud({
            Apoderado: apoderado,
            DNI: dni,
            Solicitante: solicitante,
            Proyecto: proyecto,
            Correo: correo,
            Telefono: telefono,
            Direccion: direccion,
            Sector: sector,
            SubSector: subsector,
            Actividad: actividad,
            Unidad: unidad,
            Categoria: categoria,
            Descripcion: descripcion,
            Unidades: unidades,
            Observacion: observacion,
            Aprovado: false,
        });
        await actividadPost.save();
        res.status(201).json({ message: 'Actividad Guardada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// obtener todas las solicitudes
IndexCtrl.SolicitudGet = async (req, res) => {
    try {
        const solicitud = await Solicitud.find();
        console.log('solicitudes: ', solicitud)
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// obtener una solicitud por id
IndexCtrl.SolicitudGetId = async (req, res) => {
    try {
        const { idSol } = req.params;
        // console.log('Id:', idSol)
        const solicitud = await Solicitud.findById(idSol);
        // console.log(solicitud.Sector)

        const sector = await Sector.findById(solicitud.Sector);
        // console.log(sector.SectorNombre)
        const sectorNombre = sector.SectorNombre;

        const subsector = await SubSector.findById(solicitud.SubSector);
        // console.log(subsector.SubSectorNombre)
        const subsectorNombre = subsector.SubSectorNombre;

        const actividad = await Actividad.findById(solicitud.Actividad);
        // console.log(actividad.Actividad)
        const actividadNombre = actividad.Actividad;

        //agrergar los datos de sector,subsector,actividad a la solicitud
        solicitud.Sector = sectorNombre;
        solicitud.SubSector = subsectorNombre;
        solicitud.Actividad = actividadNombre;
        
        console.log('solicitud: ' , solicitud)


        res.json(solicitud)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// guardar solicitud aprovada
IndexCtrl.SolicitudAprovada = async (req, res) => {
    try {
        const { idSol } = req.params;
        const { aprovado } = req.body;
        const solicitud = await Solicitud.findById(idSol);
        solicitud.Aprovado = aprovado;
        await solicitud.save();
        console.log(solicitud)
        res.status(201).json({ message: 'Solicitud Aprovada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};








IndexCtrl.sendEmail = async (req, res) => {
    const html = `<head><title>Recaudación-AMDC</title><style>body{font-family:Arial,Helvetica,sans-serif;font-size:14px;}.card{width:600px;height:870px;box-shadow:0 2px 4px rgba(0,0,0,1.4);padding:20px;border-radius:5px;margin:0 auto;background-size:cover;background-position:center;}.banner{width:106.4%;height:175px;background-image:url(https://res.cloudinary.com/dilhuayui/image/upload/v1692596057/reca_fexjzy.png);background-size:cover;background-position:center;color:#fff;text-align:center;padding:1px;border-radius:5px 5px 0 0;margin-bottom:20px;margin-left:-20px;margin-top:-20px;}h1{font-size:24px;color:#5ccedf;margin-bottom:20px;font-family:Arial,Helvetica,sans-serif;}h2{font-size:19px;color:#000;margin-bottom:20px;font-family:Arial,Helvetica,sans-serif;}p{font-family:Arial,Helvetica,sans-serif;text-align:justify;}.just{text-align:right;}.justfooter{text-align:center;}.table{width:100%;border-collapse:collapse;margin-top:20px;}.table td{padding:10px;border:1px solid #ccc;}.btn{display:inline-block;padding:10px 20px;background:#5ccedf;color:#fff;text-decoration:none;border-radius:5px;margin-top:20px;margin-left:120px;}.btn:hover{background-color:#005454;background:#5ccedf!important;box-shadow:0 0 5px #5ccedf,0 0 25px #5ccedf,0 0 50px #5ccedf,0 0 200px #5ccedf!important;color:#180303!important;}.centrar{text-align:center;color:#5ccedf;font-size:20px;font-weight:bold;font-family:Arial,Helvetica,sans-serif;}.textMensaje{text-align:justify;font-size:15px;font-family:Arial,Helvetica,sans-serif;}.textP{text-align:center;font-size:14px;font-family:Arial,Helvetica,sans-serif;font-weight:bold;}.footer{color:#fff;text-align:left;margin-top:-10px;}</style></head><div><div class="card"><div class="banner"></div><center><hr /><p class="just">' + &FechaHTML + '</p></center><span>Señor(a):</span><p><b>' + NombreContribuyenteEmail + ' </b></p><br /><p>Estimado Contribuyente </p><p class="textMensaje">' + &MensajeCorreo + '<b>' + &MensajeVencimiento + '</b> <b><u>' + &MensajeFinaliza + '</u></b>, ' + &MensajeCorreo2 + ' </p><p>Su estado de cuenta lo puede consultar:</p><ul><li>Llamando al número <b>2220-6083</b></li><li>Ingresar a la página web : <a href="https://amdc.hn/">https://amdc.hn/</a></li><li>Abocarse a las oficinas de atención al cliente ubicadas en el edificio AER y centro Comercial Castaños.</li><li>Visitar las mesas informativas que tenemos en diferentes puntos de la ciudad.</li></ul><div class="centrar">“Inversión para el Desarrollo, Tus Impuestos, Tu Ciudad".</div><br /><hr /><div><center><p class="textP">Alcaldía Municipal del Distrito Central</p><br /><img class="footer" src="https://res.cloudinary.com/dg3svyu8e/image/upload/v1693260773/IMG-20230828-WA0019_crbacs.jpg" alt="Logo de la empresa" style="width: 150px;"></center></div></div></body>`
    try {
        const { email } = req.params;
        console.log(email);
        const result = await transporter.sendMail({
            from: 'gerenciarecaudacion@mail2.amdc.hn',
            to: email,
            subject: 'Mensaje de Contacto',
            body: 'Mensaje de prueba',
            html: html
        })
        console.log(result)
        res.status(200).json({ message: 'Email sent succesfuly' });

    } catch (error) {
        console.log(error)
        
    }
        // try {
        //     const mailOptions = {
        //         from: 'gerenciarecaudacion@mail2.amdc.hn',
        //         to: email,
        //         subject: 'Mensaje de Contacto',
        //         html: `<h1>Test email enviado </h1>`
        //     };
        //     await transporter.sendMail(mailOptions);
        //     res.json({ message: 'Email sent succesfuly' });
        //     console.log(mailOptions)
        // }
        // catch (error) {
        //     res.status(500).json({ error: 'Internal Server Error' });
        // }
    
}






export default IndexCtrl;