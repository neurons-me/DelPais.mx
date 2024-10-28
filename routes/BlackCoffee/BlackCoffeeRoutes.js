import express from 'express';
const router = express.Router();

const routerBlackCoffee = router.get('/',(req,res)=>{
    res.send('This is content for blackcoffee.mx');
});


export default routerBlackCoffee;