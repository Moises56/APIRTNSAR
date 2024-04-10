// controllers/apiController.js
const ApiCtrl = {};
import sumaVentas from "../Model/SumaVVB.js";
import User from "../Model/User.js";
import AMDCDATA from "../Model/AmdcDatos.js";
import AMDCDATAc from "../Model/DatosAmdcCs.js";
import DATAAMDCON from "../Model/DataAmdcOn.js";


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
      message: "Lo sentimos, se produjo un error al procesar tu solicitud en los servicios del SAR. Por favor, inténtalo de nuevo.",
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
      message: "Lo sentimos, se produjo un error al procesar tu solicitud en los servicios del SAR. Por favor, inténtalo de nuevo.",
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
  const { RTN, nombreEmpresa, sumaAMDC, sumaSar, diferencia, anio, usuario, userId } = req.body;

  try {
    // Verificar si el usuario existe en la base de datos del modelo User
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "El usuario no existe" });
    } else {
      console.log('Usuario encontrado en la base de datos');
    }

    const newSumaVenta = new sumaVentas({
      userId,
      RTN,
      nombreEmpresa,
      sumaAMDC,
      sumaSar,
      diferencia,
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


// obtener todas las sumas de ventas brutas con paginacion mostrar 10 registros por pagina
ApiCtrl.getVentasBrutas = async (req, res) => {
  const page = parseInt(req.body.page) || 1;
  const limit = parseInt(req.body.limit) || 10;

  try {
    const totalItems = await sumaVentas.countDocuments();
    const sumasVentas = await sumaVentas.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      sumasVentas,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error al obtener las sumas de ventas brutas", error: error.message });
  }
  
};

// obtener una suma de ventas brutas por id de usuario
ApiCtrl.getVentasBrutasById = async (req, res) => {
  const userId = req.params.idUser;
  const page = parseInt(req.body.page) || 1;
  const limit = parseInt(req.body.limit) || 10;

  try {
    // Verificar si el usuario existe en la base de datos del modelo User
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "El usuario no existe" });
    }

    // Obtener las sumas de ventas brutas para el usuario específico
    const totalItems = await sumaVentas.countDocuments({ userId });
    const sumasVentas = await sumaVentas.find({ userId })
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 })
    .lean();

    res.json(
      {
        sumasVentas,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      });
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


//* Get DATOSaMDCS

ApiCtrl.getAmdcDatoscS = async (req, res) => {
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
    const amdcDatos = await AMDCDATAc.find({ RTN, ANIO })
    //ordenar por el estado si es 0 
    .sort({ ESTATUS: 1, FECHA: -1})
    .lean();

    // Verificar si hay datos para el año ingresado
    if (amdcDatos.length === 0) {
      return res.json({
        isSuccess: false,
        message: `No hay datos para el año ingresado: ${ANIO}`,
      });
    }

    // Si hay datos, enviarlos como un array
    res.json(amdcDatos);
  } catch (error) {
    res.json({ message: "Error al obtener los datos de AMDCDATOS" });
  }
};

//Obtener todos los datos de AMDcDATOS con paginacion mostrar 20 registros por pagina
ApiCtrl.getAllAmdcDatos = async (req, res) => {
  const page = parseInt(req.body.page) || 1;
  const limit = parseInt(req.body.limit) || 20;

  try {
    const totalItems = await DATAAMDCON.countDocuments();
    const amdcDatos = await DATAAMDCON.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      amdcDatos,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error al obtener los datos de AMDCDATOS", error: error.message });
  }
};

// filtrar por DNI_RTN, ICS, CONTRIBUYENTE en el modelo de DATOSAMDCON
ApiCtrl.getAmdcDatosByRTN = async (req, res) => {
  const page = parseInt(req.body.page) || 1;
  const limit = parseInt(req.body.limit) || 20;
  const { busqueda } = req.body;

  try {
    const query = {
      $or: [
        { DNI_RTN: { $regex: busqueda, $options: 'i' } },
        { ICS: { $regex: busqueda, $options: 'i' } },
        { CONTRIBUYENTE: { $regex: busqueda, $options: 'i' } },
        { NOMBRE_COMERCIAL: { $regex: busqueda, $options: 'i' } },
      ]
    };

    const [contribuyentes, totalItems] = await Promise.all([
      DATAAMDCON.find(query)
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ ANIO: -1})
        .lean(),
      DATAAMDCON.countDocuments(query)
    ]);

    res.json({
      contribuyentes,
      totalPages2: Math.ceil(totalItems / limit),
      currentPage2: page,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error al obtener los datos de AMDCDATOS", error: error.message });
  }
};


export default ApiCtrl;
