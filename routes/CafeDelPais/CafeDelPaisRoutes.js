import express from 'express';
const router = express.Router();

const routerCafeDelPais = router.get('/',(req,res)=>{
    res.send('This is content for cafedelpais.mx');
});

export default routerCafeDelPais;