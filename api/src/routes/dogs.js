const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { YOUR_API_KEY } = process.env;
const { default: axios } = require("axios");
const router = Router();

const getBd = async () => {
  return await Dog.findAll({  //es un metodo sequelize que trae la info d ela base de datos del modelo dog.
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {

        attributes: [],
      },
    },
  });
};

const getApi = async () => {     //Se trae la info de la api
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`
  );
  const apiInfo = await apiUrl.data.map((e) => {    //se crea un array de objetos que detalla la info que necesito
    return {
      id: e.id,
      image: e.image.url,
      name: e.name,
      temperament: e.temperament,
      weight: e.weight.metric,
      height: e.height.metric,
      life_span: e.life_span,
    };
  });
  return apiInfo;
};

const getBreeds = async () => {     //Espera la info de la BD y la api y concatena toda la info y la guarda en una variable
  const apiInfo = await getApi();
  const bdInfo = await getBd();
  const allInfo = apiInfo.concat(bdInfo);

  return allInfo;
};

router.get("/", async (req, res) => {
  const { name } = req.query;   //QUERY(name)
  const allBreeds = await getBreeds();

  if (!name) {
    res.status(200).json(allBreeds);
  } else {
    const filtrados = allBreeds.filter((e) => {
      const names = e.name.toUpperCase();
      if (names.includes(name.toUpperCase())) return names;
    });
    filtrados.length 
    ? res.status(200).json(filtrados)
    : res.status(400).send("Raza no encontrada");
  }
   
});
   
router.get("/:id", async (req, res) => {
  const id = req.params.id; //ENTRA POR PARAMS(id)
  const breeds = await getBreeds();
  if (id) {
    const filtrados = await breeds.filter((e) => e.id == id);
    filtrados.length
      ? res.status(200).json(filtrados) // ternario. si se cumple la condicion se ejecuta esto, sino se ejecuta lo siguiente
      : res.status(404).send("Raza no encontrada por ID");
  }
});

module.exports = router;
