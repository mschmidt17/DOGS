const { Router } = require('express');
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;
const { default: axios } = require('axios');
const router = Router();

router.get('/', async (req, res)=>{
   const temperamentsInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
   
   const temperamentsBd = temperamentsInfo.data.map((e) => e.temperament)//muchos arreglos

   
   const filtrado = temperamentsBd.filter(e => e); //Filtra los elementos que cumplen con la condicion que le indicas en un nuevo array
   const filtradoEach =[... new Set (filtrado)];
   filtradoEach.forEach(e =>{   //Va elemento por elemento haciendo la condicion que le indicamos
      Temperament.findOrCreate({// se fija si esta y si no esta lo crea 
         where: {name: e},
      })
   })
   const todosTemperaments =await Temperament.findAll();
   res.json(todosTemperaments);


})


module.exports = router;