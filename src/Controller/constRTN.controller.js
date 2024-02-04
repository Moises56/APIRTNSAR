// controllers/apiController.js
const ApiCtrl = {};
import sumaVentas from "../Model/SumaVVB.js";

import axios from "axios";
import { response } from "express";

//Consulta por RTN
ApiCtrl.consultaRTN = async (req, res) => {
  const apiUrl =
    "http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaRTN";
  const username = "INT-AMDC-SW-API";
  const password = "X&#rjw1Z5S&2";
  const { rtn } = req.body;

  try {
    console.log("RTN: ", rtn);
    const response = await axios.post(
      apiUrl,
      { rtn },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${username}:${password}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
    console.log(response.data);
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
ApiCtrl.ventasBrutas = async (req, res) => {
  const apiUrl =
    "http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaVentasBrutas"; // Reemplaza con la URL de tu API
  const username = "INT-AMDC-SW-API";
  const password = "X&#rjw1Z5S&2";
  const { Rtn, PeriodoDesde, PeriodoHasta } = req.body;

  try {
    console.log("Rtn: ", Rtn, PeriodoDesde, PeriodoHasta);
    const response = await axios.post(
      apiUrl,
      { Rtn, PeriodoDesde, PeriodoHasta },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${username}:${password}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
    console.log(response.data);
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

// guarda el total de ventas brutas 
// {id: 1, RTN: rtn, nombreEmpresa: empresa sumaAMDC: amdc, sumaSar: sar, anio: "2019", usuario: "admin"}
ApiCtrl.saveVentasBrutas = async (req, res) => {
  const { RTN, nombreEmpresa, sumaAMDC, sumaSar, anio, usuario } = req.body;
  const newSumaVenta = new sumaVentas({
    RTN,
    nombreEmpresa,
    sumaAMDC,
    sumaSar,
    anio,
    usuario,
  });

  try {
    await newSumaVenta.save();
    res.json({ message: "Suma de ventas brutas guardada" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar la suma de ventas brutas" });
  }
};




export default ApiCtrl;
