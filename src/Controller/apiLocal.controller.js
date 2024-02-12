// controllers/apiController.js
const ApiLocalCtrl = {};

import axios from "axios";
import { response } from "express";

//Consulta por RTN
ApiLocalCtrl.consultaRTNl = async (req, res) => {
  const apiUrl = "https://api.amdc.hn:9091/api/apirtn";
  const username = "INT-AMDC-SW-API";
  const password = "X&#rjw1Z5S&2";
  const { rtn } = req.body;
  console

  try {
    console.log("rtn: ", rtn);
    const response = await axios.post(
      apiUrl,
      { rtn },
      {
        headers: {
          // 'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
          "Content-Type": "application/json",
          // poner en el header el x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjZjY2VjZDZjNjFjNGY0NTNjMjJjYyIsImlhdCI6MTcwNjgzNDkyMSwiZXhwIjoxNzA2OTIxMzIxfQ.FvRgeX-v6OJqJx-CXE1MDLrEDjkvSPoSKtNQgH1dQHo

          "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjZjY2VjZDZjNjFjNGY0NTNjMjJjYyIsImlhdCI6MTcwNjgzNDkyMSwiZXhwIjoxNzA2OTIxMzIxfQ.FvRgeX-v6OJqJx-CXE1MDLrEDjkvSPoSKtNQgH1dQHo"
        },
      }
    );

    if (response.data.isSuccess === true) {
      res.json(response.data);
      console.log(response.data);
    } else {
      res.json(response.data);
      console.log(response.data);
    }

  } catch (error) {
    // Prepara un objeto de error personalizado con la información específica
    let customError = {
      data: null,
      isSuccess: false,
      message: "Error desconocido",
    };

    // Verifica si el error es una instancia de AxiosError
    if (error instanceof axios.AxiosError) {
      // Accede a las propiedades específicas del error de Axios
      const axiosError = error;

      // Accede a la respuesta (si está disponible)
      const responseData = axiosError.response?.data;

      if (responseData) {
        customError = {
          ...customError,
          data: responseData.data,
          isSuccess: responseData.isSuccess,
          message: responseData.message,
        };
      }
    }
    console.log(customError);

    res.status(500).json(customError);
  }
};

// Consulta por Ventas Brutas
ApiLocalCtrl.ventasBrutasl  = async (req, res) => {
  try {
    const apiUrl = "https://api.amdc.hn:9091/api/ventaBruta";
    const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;

    // Verificar si los datos requeridos están presentes
    if (!Rtn || !PeriodoDesde || !PeriodoHasta) {
      return res.status(400).json({ error: 'Se requieren Rtn, PeriodoDesde y PeriodoHasta' });
    }

    // Realizar la solicitud a la API
    const response = await axios.post(apiUrl, { Rtn, PeriodoDesde, PeriodoHasta });

    // Si la solicitud fue exitosa, devolver los datos
    return res.json(response.data);
  } catch (error) {
    // Si ocurre algún error, devolver un mensaje de error
    console.error('Error al consumir la API:', error.message);
    return res.status(500).json({ error: 'Error al consumir la API' });
  }
};


export default ApiLocalCtrl;
