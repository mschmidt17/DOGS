const { Router } = require('express'); 
const router = Router();               
const { Dog } = require('../db.js');   


router.post("/", async (req, res, next) => {
    try {
        const {                                            //Guarda lo que el usuario completo en el formulario 
            name,
            height,
            weight,
            life_span,
            temperament,
            image,
            createdInDB
        } = req.body;                                      
        
        const newDog = await Dog.create({                 //espera que se cree un perro con los datos capturados en mi BD
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            image: image,
            temperament: temperament,
            createdInDB
        });
        console.log(newDog)
        res.status(200).json(newDog);
        
    } catch (error) {
        next(error);   
    }
});
  
   
  module.exports = router;