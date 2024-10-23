// apps/DelPaís.mx/index.js - Aplicación DelPaís.mx que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9002;

// Middleware para manejar las rutas basadas en el dominio de origen
app.use((req, res, next) => {
    const domain = req.headers.host; // Obtiene el dominio desde el request
/*
cafedelpais.com.mx  - squarespace
cafedelpais.mx  - squarespace
blackcoffee.mx  - fatcow
abokado.mx - fatcow
kohi.mx - fatcow
delpais.mx - squarespace
ilegalmezcal.mx  - squarespace
kidneywood.info  - squarespace
maizdelpais.com.mx  - squarespace
maizdelpais.mx  - squarespace
palo-azul.com  - squarespace
paloazul.com.mx  - squarespace
paloazul.mx  - squarespace
*/
// Importar routers para cada dominio
import routerDelPais from './routes/DelPaisMx/DelPaisMxRoutes';
import routerCafeDelPais from './routes/CafeDelPais/CafeDelPaisRoutes';
import routerBlackCoffee from './routes/BlackCoffee/BlackCoffeeRoutes';
import routerKohi from './routes/Kohi/KohiRoutes';
import routerAbokado from './routes/AbokadoMx/AbokadoMxRoutes';
import routerMezcal from './routes/IlegalMezcalMx/IlegalMezcalMxRoutes.js';
import routerMaizDelPais from './routes/MaizDelPaisMx/MaizDelPaisMxRoutes.js';
import routerKidneywood from './routes/KidneywoodInfo/KidneywoodInfoRoutes.js';
import routerPaloAzul from './routes/PaloAzul/PaloAzulRoutes.js';

// Middleware para manejo de dominios con netgetGateway
app.use(netgetGateway('delpais.mx', routerDelPais));
app.use(netgetGateway('cafedelpais.com.mx', routerCafeDelPais));
app.use(netgetGateway('cafedelpais.mx', routerCafeDelPais));
app.use(netgetGateway('blackcoffee.mx', routerBlackCoffee));
app.use(netgetGateway('kohi.mx', routerKohi));
app.use(netgetGateway('abokado.mx', routerAbokado));
app.use(netgetGateway('ilegalmezcal.mx', routerMezcal));
app.use(netgetGateway('maizdelpais.mx', routerMaizDelPais));
app.use(netgetGateway('maizdelpais.com.mx', routerMaizDelPais));
app.use(netgetGateway('kidneywood.info', routerKidneywood));
app.use(netgetGateway('palo-azul.com', routerPaloAzul));
app.use(netgetGateway('paloazul.com.mx', routerPaloAzul));
app.use(netgetGateway('paloazul.mx', routerPaloAzul));

// Si no se reconoce el dominio, redirigir a una página 404
app.use((req, res) => {
  res.redirect('/not-found');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`DelPaís.mx está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});