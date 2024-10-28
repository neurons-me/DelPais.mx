import express from 'express';
const router = express.Router();

const routerPaloAzul = router.get('/',(req,res)=>{
    res.send('This is content for paloazul.mx');
});

export default routerPaloAzul;