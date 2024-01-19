// controllers/apiController.js
const ApiLocalCtrl = {};

import axios from 'axios';
import { response } from 'express';

//Consulta por RTN
ApiLocalCtrl.consultaRTNl = async (req, res) => {
  const apiUrl = 'http://api.amdc.hn:3000/apirtn';
  const username = 'INT-AMDC-SW-API'; 
  const password = 'X&#rjw1Z5S&2';
  const { rtn } = req.body;

  try {
    console.log('RTN: ', rtn)
    const response = await axios.post(apiUrl, { rtn }, {
      headers: {
        // 'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
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

// Consulta por Ventas Brutas
ApiLocalCtrl.ventasBrutasl = async (req, res) => {
    const apiUrl = 'http://api.amdc.hn:3000/ventaBruta'; // Reemplaza con la URL de tu API
    const username = 'INT-AMDC-SW-API'; 
    const password = 'X&#rjw1Z5S&2';
    const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;
  
    try {
      console.log('Rtn: ', Rtn,PeriodoDesde,PeriodoHasta)
      const response = await axios.post(apiUrl, { Rtn, PeriodoDesde, PeriodoHasta }, {
        headers: {
        //   'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
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


export default ApiLocalCtrl;
