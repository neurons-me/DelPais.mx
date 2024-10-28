import express from 'express';
const router = express.Router();

const routerDelPais = router.get('/', (req, res) => {
    res.send('This is content for DelPais.mx');
});

export default routerDelPais;