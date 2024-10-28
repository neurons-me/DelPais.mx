import express from 'express';
const router = express.Router();

const routerMezcal = router.get('/', (req, res) => {
    res.send('This is content for ilegalmezcal.mx');
});

export default routerMezcal;