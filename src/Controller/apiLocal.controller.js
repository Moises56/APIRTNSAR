// controllers/apiController.js
const ApiLocalCtrl = {};

import axios from "axios";
import { response } from "express";

//Consulta por RTN
ApiLocalCtrl.consultaRTNl = async (req, res) => {
  const apiUrl = "https://api.amdc.hn:9091/apirtn";
  const username = "INT-AMDC-SW-API";
  const password = "X&#rjw1Z5S&2";
  const { rtn } = req.body;
  console

  try {
    console.log("RTN: ", rtn);
    const response = await axios.post(
      apiUrl,
      { rtn },
      {
        headers: {
          // 'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
          "Content-Type": "application/json",
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
ApiLocalCtrl.ventasBrutasl = async (req, res) => {
  const apiUrl = "https://api.amdc.hn:9091/ventaBruta"; 
  const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;

  try {
    console.log("Rtn: ", Rtn, PeriodoDesde, PeriodoHasta);
    const response = await axios.post(
      apiUrl,
      { Rtn, PeriodoDesde, PeriodoHasta },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Esto viene: ", response.data);
    res.status(200).json(response.data);
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

    res.status(500).json( customError);
  }
};

export default ApiLocalCtrl;
