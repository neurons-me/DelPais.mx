// apps/DelPaís.mx/index.js - Aplicación DelPaís.mx que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = 9000;

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
    // Lógica para redirigir a diferentes secciones según el dominio
    switch (domain) {
        case 'delpais.mx':
            res.redirect('/delpais');
            break;
        case 'cafedelpais.com.mx':
            res.redirect('/cafedelpais');
            break;
        case 'cafedelpais.mx':
            res.redirect('/cafe');
            break;
        case 'blackcoffee.mx':
            res.redirect('/blackcoffee');
            break;
        case 'kohi.mx':
            res.redirect('/kohi');
            break;
        case 'abokado.mx':
            res.redirect('/abokado');
            break;
        case 'ilegalmezcal.mx':
            res.redirect('/mezcal');
            break;
        case 'maizdelpais.mx':
            res.redirect('/maiz');
            break;
        case 'maizdelpais.com.mx':
            res.redirect('/maiz');
            break;
        case 'kidneywood.info':
            res.redirect('/kidneywood');
            break;
        case 'palo-azul.com':
            res.redirect('/paloazul');
            break;
        case 'paloazul.com.mx':
            res.redirect('/paloazul');
            break;
        case 'paloazul.mx':
            res.redirect('/paloazul');
            break;
        default:
            // Redirigir a una página por defecto o mostrar un error si el dominio no es reconocido
            res.redirect('/not-found');
            break;
    }
});

// Definición de las rutas específicas para cada sección

app.get('/delpais', (req, res) => {
    res.send('Bienvenido a DelPaís.mx');
});

app.get('/cafe', (req, res) => {
    res.send('Bienvenido al Café DelPaís.mx');
});
app.get('/blackCofee', (req, res) => {
    res.send('Welcome to Black Coffee DelPaís.mx');
});
app.get('/kohi', (req, res) => {
    res.send('Kohi DelPaís.mx');
});

app.get('/abokado', (req, res) => {
    res.send('Abokado DelPaís.mx');
});

app.get('/mezcal', (req, res) => {
    res.send('Bienvenido al Mezcal DelPaís.mx');
});

app.get('/maiz', (req, res) => {
    res.send('Bienvenido al Maíz DelPaís.mx');
});

app.get('/kidneywood', (req, res) => {
    res.send('Welcome to Kidneywood Info.');
});

app.get('/paloazul', (req, res) => {
    res.send('Bienvenido al Palo Azul DelPaíz.mx');
});

app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`DelPaís.mx está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});