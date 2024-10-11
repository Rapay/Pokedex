const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // ou 'postgres', 'sqlite', etc.
});

const Pokemon = sequelize.define('Pokemon', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    powerLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    }
}, {

    tableName: 'pokemons',
    timestamps: false
});

(async() => {
    try {
        await sequelize.sync(); // Cria a tabela se ela não existir
        console.log('Tabela de Pokémons criada ou já existente.');
    } catch (error) {
        console.error('Erro ao sincronizar com o banco de dados:', error);
    }
})();

module.exports = Pokemon;