const { Router } = require('express'); //Importo router desde express(framework de back)
const router = Router();               //Lo invocas y lo guardas en una variable
const { Dog } = require('../db.js');   //Me traigo el modelo de la tabla dog de mi base de datos


//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
//Crea una raza de perro en la base de datos


//Post: Toma informacion del formulario del body(cuerpo pag web) para guardarlo en la base de datos


router.post("/", async (req, res, next) => {
    try {
        const {
            name,
            height,
            weight,
            life_span,
            temperament,
            image,
        } = req.body;
        
        const newDog = await Dog.create({
            name:name,
            height: height,
            weight: weight,
            life_span: life_span,
            image: image,
            temperament: temperament,
        });
        res.status(200).json(newDog);
        
    } catch (error) {
        next(error);   
    }
});
  
   
  module.exports = router;