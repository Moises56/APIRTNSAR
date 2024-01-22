// controllers/apiController.js
const ApiCtrl = {};

import axios from 'axios';
import { response } from 'express';

ApiCtrl.consultaRTN = async (req, res) => {
  const apiUrl = 'http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaRTN'; // Reemplaza con la URL de tu API
  const username = 'INT-AMDC-SW-API'; // Reemplaza con tu nombre de usuario
  const password = 'X&#rjw1Z5S&2'; // Reemplaza con tu contraseña
  const { rtn } = req.body;

  try {
    console.log({
        apiUrl,
        username,
        password,
        rtn

    })
    const response = await axios.post(apiUrl, { rtn }, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    console.error('Error al consumir la API:', error);
    res.status(500).json({ error: 'Error al consumir la API' });
  }
};


// ApiCtrl.ventasBrutas = async (req, res) => {
//     const apiUrl = 'http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaVentasBrutas'; // Reemplaza con la URL de tu API
//     const username = 'INT-AMDC-SW-API'; // Reemplaza con tu nombre de usuario
//     const password = 'X&#rjw1Z5S&2'; // Reemplaza con tu contraseña
//     const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;
  
//     try {
//       const response = await axios.post(apiUrl, { Rtn, PeriodoDesde, PeriodoHasta }, {
//         headers: {
//           'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
//           'Content-Type': 'application/json'
//         }
//       });
  
//       res.json(response.data);
//       console.log(response.data)
//     } catch (error) {
//       console.error('Error al consumir la API:', error);
//       res.status(500).json({ error: 'Error al consumir la API' });
//     }
//   };


ApiCtrl.ventasBrutas = async (req, res) => {
  const apiUrl = 'http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaVentasBrutas';
  const username = 'INT-AMDC-SW-API';
  const password = 'X&#rjw1Z5S&2';
  const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;

  try {
    const response = await axios.post(apiUrl, { Rtn, PeriodoDesde, PeriodoHasta }, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        'Content-Type': 'application/json'
      }
    });

    // Verifica si la solicitud fue exitosa
    if (response.data.isSuccess) {
      const { data, isSuccess, message } = response.data;
      
      // Muestra la información deseada
      res.json({ data, isSuccess, message });
    } else {
      // Si isSuccess es falso, significa que hubo un error en la solicitud
      res.status(500).json({ error: message });
    }
  } catch (error) {
    console.error('Error al consumir la API:', error);
    res.status(500).json({ error: 'Error al consumir la API' });
  }
};

export default ApiCtrl;
