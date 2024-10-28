import express from 'express';
const router = express.Router();

const routerAbokado = router.get('/',(req,res)=>{
    res.send('This is content for abokado.mx');
});

export default routerAbokado;