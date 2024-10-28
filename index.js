// apps/DelPaís.mx/index.js - DelPaís.mx application that handles multiple domains
import express from 'express';

import netgetGateway from './netgetGateway.js';
import routerDelPais from './routes/DelPaisMx/DelPaisMxRoutes.js';
import routerCafeDelPais from './routes/CafeDelPais/CafeDelPaisRoutes.js';
import routerKohi from './routes/Kohi/KohiRoutes.js';
import routerAbokado from './routes/AbokadoMx/AbokadoMxRoutes.js';
import routerMezcal from './routes/IlegalMezcalMx/IlegalMezcalRoutes.js';
import routerMaizDelPais from './routes/MaizDelPaisMx/MaizDelPaisMxRoutes.js';
import routerKidneywood from './routes/KidneywoodInfo/KidneywoodInfoRoutes.js';
import routerPaloAzul from './routes/PaloAzul/PaloAzulRoutes.js';
import routerBlackCoffee from './routes/BlackCoffee/BlackCoffeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 9002;

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

app.use((req, res) => {
  res.redirect('/not-found');
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`DelPaís.mx is listening on port ${PORT}`);
    app.use((req, res, next) => {
      console.log(`Incoming request: ${req.method} ${req.url}`);
      next();
    });
});