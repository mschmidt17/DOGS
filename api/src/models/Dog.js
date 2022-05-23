const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    createdInDB: {                  //Le agrego esta propiedad para que los dogs creados se distingan de los de la api. Sirve para filtarlos
      type: DataTypes.BOOLEAN,      //los dogs creados se guardan en mi base de datos y el resto de los dogs los pido a la API.
      allowNull: false,
      defaultValue: true,
    },
    
    
  },{
    timestamps: false,         //Es para que no se creen las columnas de las fechas (creacion-modificacion)
  });
};
