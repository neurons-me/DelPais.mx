import express from 'express';
const router = express.Router();

const routerMaizDelPais = router.get('/',(req,res)=>{
    res.send('This is content for maizdelpais.mx');
});

export default routerMaizDelPais;