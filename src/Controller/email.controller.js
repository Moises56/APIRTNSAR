const EmailCtrl = {};
import Email from "../helpers/mailer.js";
import User from "../Model/User.js";

EmailCtrl.sendEmail = async (req, res) => {
  console.log('Hello');
  
  try {
    const users = await User.find();
    //obtener el email y el username de todos los usuarios
    // const emails = users.map(user => user.email);
    // const usernames = users.map(user => user.username);
    const emails = 'belinda.salgado@amdc.hn';
    const password = 'bfunez2881.';
    console.log(emails);
    // console.log(usernames);
    	

    try {
      let info = await Email.transporter.sendMail({
        from: '"AMDC" <moises.aviles@amdc.hn>', // Dirección del remitente
        to: emails, // Lista de destinatarios
        subject: "Bienvenidos al Sistema SAR✔", // Asunto del correo
        text: "AMDC",
        html: `
        <html>
            <head>
                <style>
                    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap");                  
                    :root {
                      font-size: 15px;
                      --var-soft-blue: hsl(215, 26%, 91%);
                      --var-cyan: hsl(178, 100%, 50%);
                      --var-main-darkest: hsl(217, 54%, 11%);
                      --var-card-dark: hsl(216, 18%, 35%, 1);
                      --var-line-dark: hsl(215, 32%, 27%);
                      --var-lightest: white;
                
                      --var-heading: normal normal 600 1.5em/1.6em "Outfit", sans-serif;
                
                      --var-small-heading: normal normal 400 1em/1em "Outfit", sans-serif;
                
                      --var-para: normal normal 300 1em/1.55em "Outfit", sans-serif;
                    }
                
                    html {
                      box-sizing: border-box;
                    }
                
                    *,
                    *::before,
                    *::after {
                      box-sizing: inherit;
                      margin: 0;
                    }
                
                    body {
                      background-color: #fff;
                    }
                
                    img {
                      width: 100%;
                      border-radius: 15px;
                      display: block;
                    }
                
                    a {
                      color: inherit;
                    }
                
                    h1 {
                      font: var(--var-heading);
                      color: var(--var-lightest);
                      padding: 1.2em 0;
                    }
                
                    h2 {
                      font: var(--var-small-heading);
                      color: var(--var-lightest);
                    }
                
                    p {
                      font: var(--var-para);
                      color: var(--var-soft-blue);
                    }
                
                    span {
                      color: white;
                    }
                
                    .card-container {
                      width: 100%;
                      max-width: 400px;
                      margin: 2em auto;
                      background-color: var(--var-card-dark);
                      border-radius: 15px;
                      margin-bottom: 1rem;
                      padding: 2rem;
                    }
                
                    div.flex-row {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    }
                
                    div.coin-base,
                    .time-left,
                    .card-attribute {
                      display: flex;
                      align-items: center;
                      padding: 1em 0;
                    }
                
                    .card-attribute {
                      padding-bottom: 1.5em;
                      border-top: 2px solid var(--var-line-dark);
                    }
                
                    a.hero-image-container {
                      position: relative;
                      display: block;
                    }
                
                    img.eye {
                      position: absolute;
                      width: 100%;
                      max-width: 2em;
                      top: 44%;
                      left: 43%;
                    }
                
                    @media (min-width: 400px) {
                      img.eye {
                        max-width: 3em;
                      }
                    }
                
                    .hero-image-container::after {
                      content: "";
                      background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: 5rem;
                      background-color: hsla(178, 100%, 50%, 0.3);
                      width: 100%;
                      height: 100%;
                      border-radius: 1rem;
                      position: absolute;
                      top: 0;
                      left: 0;
                      display: block;
                      z-index: 2;
                      opacity: 0;
                      transition: opacity 0.3s ease-out;
                    }
                
                    .hero-image-container:hover::after {
                      opacity: 1;
                    }
                
                    .small-image {
                      width: 1.2em;
                      margin-right: 0.5em;
                    }
                
                    .small-avatar {
                      width: 2em;
                      border-radius: 200px;
                      outline: 2px solid white;
                      margin-right: 1.4em;
                    }
                
                    div.attribution {
                      margin: 0 auto;
                      width: 100%;
                      font: var(--var-para);
                      text-align: center;
                      padding: 1.5em 0 4em 0;
                      color: var(--var-line-dark);
                    }
                    .attribution a {
                      color: var(--var-soft-blue);
                    }
                
                    @media (min-width: 600px) {
                      body {
                        font-size: 18px;
                      }
                    }
                
                    .text-center {
                      text-align: center;
                    }
                    .text-justify {
                      text-align: justify;
                      text-align-last: center;
                      text-justify: inter-word;
                      text-align-last: center;
                    }
                
                    a {
                      text-decoration: none;
                    }
                
                    .consulta {
                      color: var(--var-cyan);
                      text-decoration: underline;
                    }
                
                    .footer-card {
                      text-align: center;
                      color: var(--var-line-dark);
                    }
                </style>
            </head>
            <body>
                <div class="card-container">
                    <a href="https://consulta.amdc.hn/" class="hero-image-container"><img class="hero-image" src="https://amdc.hn/wp-content/uploads/2024/02/CIUDAD-DE-BUEN-CORAZON.png" target="_blank" alt="Spinning glass cube"/></a>
                    <main class="main-content">
                        <h1 class="text-center"><a href="https://consulta.amdc.hn/">Bienvenidos al Sistema SAR-AMDC</a></h1>
                        <p>A continuación, se le brindan los accesos al sistema. Por favor, ingrese al siguiente enlace: <a class="consulta" href="https://consulta.amdc.hn/"> consulta.amdc.hn</a></p>
                        <br/>
                        <hr/>
                        <div class="flex-row">
                            <div class="coin-base"><h2>Usuario: <span class="emails">${emails}</span></h2></div>
                            <div class="time-left"><p></p></div>
                        </div>
                        <div class="flex-row">
                            <div class="coin-base"><h2>Contraseña: <span class="password">${password}</span></h2></div>
                            <div class="time-left"><p></p></div>
                        </div>
                        <hr/>
                        <div class="footer-card"><p>© 2024 Todos los derechos reservados.<a href="https://consulta.amdc.hn/">Gerencia de Informacion y Sistemas</a></p></div>
                    </main>
                </div>
            </body>
        </html>
        `,
      });
      
      console.log("Message sent: %s", info);
      res.json({message: "Email sent"});

    }
    catch (err) {
      console.log(err);
      return res.status(400).json({ message: '¡Algo salió mal1!' });
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: '¡Algo salió mal2!' });
  }
};

    

export default EmailCtrl;


