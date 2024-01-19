import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "gerenciarecaudacion@mail2.amdc.hn",
        pass: "ymbfyzrnyyrdphlm",
    },
    requireTLS: true, 
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    }

  });

export default transporter;

// smtp.office365.com
// host: "outlook.office365.com",
//Woj46033
