// controllers/apiController.js
const ApiCtrl = {};
import sumaVentas from "../Model/SumaVVB.js";
import User from "../Model/User.js";
import AMDCDATA from "../Model/AmdcDatos.js";

import axios from "axios";
import { response } from "express";

//Consulta por RTN
ApiCtrl.consultaRTN = async (req, res) => {
  // const apiUrl = "http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaRTN"; //TEST
  // const username = "INT-AMDC-SW-API"; // TEST
  // const password = "X&#rjw1Z5S&2";   // TEST

  const apiUrl = "http://172.20.40.47:7075/int-middleware-gateway/api/v1/AMDC/ConsultaRTN"; // PROD
  const username = "INT-AMDC-API"; // PROD 
  const password = "Lk0DQ2Ng7$1s"; // PROD
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
    // console.log(customError);

    res.json({customError});
  }
};

// Consulta por Ventas Brutas
ApiCtrl.ventasBrutas = async (req, res) => {
  // const apiUrl = "http://172.20.11.52:7075/int-middleware-gateway/api/v1/AMDC/ConsultaVentasBrutas"; // TEST
  // const username = "INT-AMDC-SW-API"; // TEST
  // const password = "X&#rjw1Z5S&2";    // TEST
  
  const apiUrl = "http://172.20.40.47:7075/int-middleware-gateway/api/v1/AMDC/ConsultaVentasBrutas"; // PROD
  const username = "INT-AMDC-API"; // PROD
  const password = "Lk0DQ2Ng7$1s"; // PROD
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

    res.json({customError});
  }
};

// guarda el total de ventas brutas 
// {id: 1, RTN: rtn, nombreEmpresa: empresa sumaAMDC: amdc, sumaSar: sar, anio: "2019", usuario: "admin"}
ApiCtrl.saveVentasBrutas = async (req, res) => {
  const { RTN, nombreEmpresa, sumaAMDC, sumaSar, anio, usuario, userId } = req.body;

  try {
    // Verificar si el usuario existe en la base de datos del modelo User
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, message: "El usuario no existe" });
    } else {
      console.log('Usuario encontrado en la base de datos');
    }


    const newSumaVenta = new sumaVentas({
      userId,
      RTN,
      nombreEmpresa,
      sumaAMDC,
      sumaSar,
      anio,
      usuario,
    });

    await newSumaVenta.save();
    res.json({ success: true, message: "Suma de ventas brutas guardada" });
  } catch (error) {
    // console.error('el Error: ', error);
    res.json({ success: false, message: "Error al guardar la suma de ventas brutas", error: error.message });
  }
};


// obtener todas las sumas de ventas brutas 
ApiCtrl.getVentasBrutas = async (req, res) => {
  try {
    const sumasVentas = await sumaVentas.find();
    res.json(sumasVentas);
  } catch (error) {
    res.json({ message: "Error al obtener las sumas de ventas brutas" });
  }
};


// obtener una suma de ventas brutas por id de usuario
ApiCtrl.getVentasBrutasById = async (req, res) => {
  const userId = req.params.idUser;
  console.log(userId)

  try {
    // Verificar si el usuario existe en la base de datos del modelo User
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "El usuario no existe" });
    }

    // Obtener las sumas de ventas brutas para el usuario específico
    const sumasVentas = await sumaVentas.find({ userId });

    res.json(sumasVentas);
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error al obtener las sumas de ventas brutas por usuario", error: error.message });
  }
};

//ÒBTENER TODOS LOS DATOS DE AMDCDATOS PASNDO EL RTN y el ANIO COMO PARAMETROS
ApiCtrl.getAmdcDatos = async (req, res) => {
  const { RTN, ANIO } = req.body;
  console.log(RTN, ANIO);

  try {
    // Verificar si el RTN tiene el formato correcto
    if (RTN.length < 14) {
      return res.json({
        isSuccess: false,
        message: `El RTN no cumple con el formato de 14 caracteres: ${RTN}`,
      });
    }

    // Buscar los datos en la base de datos
    const amdcDatos = await AMDCDATA.find({ RTN, ANIO });

    // Verificar si hay datos para el año ingresado
    if (amdcDatos.length === 0) {
      return res.json({
        isSuccess: false,
        message: `No hay datos para el año ingresado: ${ANIO}`,
      });
    }

    // Si hay datos, enviarlos como un array
    res.json(amdcDatos[0]);
  } catch (error) {
    res.json({ message: "Error al obtener los datos de AMDCDATOS" });
  }
};






export default ApiCtrl;
