const { Router } = require('express');
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;
const { default: axios } = require('axios');
const router = Router();

router.get('/', async (req, res)=>{
   const temperamentsInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
   
   const temperamentsBd = temperamentsInfo.data.map((e) => e.temperament)    
   .toString()
   .trim()
   console.log(temperamentsBd);
   const prueba = temperamentsBd.split(/\s*,\s*/);
   console.log(prueba);
   
   const filtrado = prueba.filter(e => e); 
   const filtradoEach =[... new Set (filtrado)];                          //array limpio
   filtradoEach.forEach(e =>{   
      Temperament.findOrCreate({                                         //encontrar o crear para guardar en BD
         where: {name: e},      
      })
   })
   const todosTemperaments =await Temperament.findAll();                  //Muestra todos los temperamentos 
   res.json(todosTemperaments);

})




module.exports = router;