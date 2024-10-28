import express from 'express';
const router = express.Router();
const routerKidneywood = router.get('/',(req,res)=>{
    res.send('This is content for kidneywood.info');
});

export default routerKidneywood;