// controllers/apiController.js
const ApiLocalCtrl = {};

import axios from 'axios';
import { response } from 'express';

//Consulta por RTN
// ApiLocalCtrl.consultaRTNl = async (req, res) => {
//   const apiUrl = 'http://api.amdc.hn:3000/apirtn';
//   const { rtn } = req.body;

//   try {
//     console.log('RTN: ', rtn)
//     const response = await axios.post(apiUrl, { rtn }, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

    

//     res.json(response.data);
//     console.log(response.data)
//   } catch (error) {
//     console.error('Error al consumir la API:', error);
//     res.status(500).json({ error: 'Error al consumir la API' });
//   }
// };


// Consulta por RTN
ApiLocalCtrl.consultaRTNl = async (req, res) => {
  const apiUrl = 'http://api.amdc.hn:3000/apirtn';
  const { rtn } = req.body;

  try {
    console.log('RTN: ', rtn)
    const response = await axios.post(apiUrl, { rtn }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json({data: response.data});
    console.log(response.data)
  } catch (error) {
    console.log(error)
    console.error('Error al consumir la API:', error.message);
    res.status(500).json({ isSuccess: false, error: 'error al consultar el RTN ', errorMessage: error.message });
  }
};







// Consulta por Ventas Brutas
ApiLocalCtrl.ventasBrutasl = async (req, res) => {
    const apiUrl = 'http://api.amdc.hn:3000/ventaBruta'; // Reemplaza con la URL de tu API
    const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;
  
    try {
      console.log('Rtn: ', Rtn,PeriodoDesde,PeriodoHasta)
      const response = await axios.post(apiUrl, { Rtn, PeriodoDesde, PeriodoHasta }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      res.json(response.data);
      console.log('Esto viene: ', response.data)
    } catch (error) {
      console.error('Error al consumir la API:', error);
      res.status(500).json({ isSuccess: false, error: 'Error al consultar el RTN', errorMessage: error.message, });

      // res.status(500).json({ error: 'Error al consumir la API' });
    }
  };


export default ApiLocalCtrl;
