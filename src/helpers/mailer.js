const EmailCtl = {};
import nodemailer from "nodemailer";


EmailCtl.transporter = nodemailer.createTransport({
    host: "us2.smtp.mailhostbox.com",
    port: 587,
    secure: false,
    auth: {
        user: "moises.aviles@amdc.hn",
        pass: "Gtales1991",
    },
    requireTLS: true, 
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    }

  });

  EmailCtl.transporter.verify().then(() => {
    console.log('ready for send email');
})


export default EmailCtl;

// smtp.office365.com
// host: "outlook.office365.com",
//Woj46033
// host: "smtp.office365.com",
// port: 587,
// user: "gerenciarecaudacion@mail2.amdc.hn",
// pass: "ymbfyzrnyyrdphlm",