const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperament', {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
  
      name: {
        type: DataTypes.STRING,
      },
      
    });
  };
  