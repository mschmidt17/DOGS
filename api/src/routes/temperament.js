const { Router } = require('express');
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;
const { default: axios } = require('axios');
const router = Router();

router.get('/', async (req, res)=>{
   const temperamentsInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
   
   const temperamentsBd = temperamentsInfo.data.map((e) => e.temperament)//crea un array nuevo con todos los temperamentos juntos.
   .toString()//Me convierte el array en un string
   .trim()// elimina los espacios en blanco en ambos extremos del string
   console.log(temperamentsBd);
   const prueba = temperamentsBd.split(/\s*,\s*/);//crea un array con cada temperamento como un elemento del mismo, limpio: solo strings y comas
   console.log(prueba);
   
   const filtrado = prueba.filter(e => e); //Filtra los elementos, para sacar el elemento vacío 
   const filtradoEach =[... new Set (filtrado)]; //creo un array con la clase Set, que evita que se repitan los temperamentos
   filtradoEach.forEach(e =>{   //Va elemento por elemento haciendo lo que le indicamos
      Temperament.findOrCreate({// se fija si esta el temperamento en la BD y si no esta, lo crea 
         where: {name: e},       //para cada elemento, se guarda como name el tempreramento.
      })
   })
   const todosTemperaments =await Temperament.findAll();   //Es un metodo de sequelize
   res.json(todosTemperaments);

})




module.exports = router;