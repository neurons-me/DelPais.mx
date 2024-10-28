import express from 'express';
const router = express.Router();

const routerKohi = router.get('/',(req,res)=>{
    res.send('This is content for kohi.mx');
});

export default routerKohi;