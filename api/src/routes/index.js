const { Router } = require('express');
const dogsRouter = require("./dogs.js");
const dogRouter = require("./dog.js");
const temperamentRouter = require("./temperament.js");



const router = Router();


// Configurar los routers-middlewares:
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', dogRouter);
router.use('/dogs', dogsRouter);
router.use('/temperament', temperamentRouter);


//localhost:3000/api/dogs
module.exports = router;
