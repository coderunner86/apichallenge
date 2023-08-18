const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
'disneyapichallenge',
'root',
'',{
    dialect:'mysql',
    host:'localhost'
}
);

const connectDB = async ()=> {
    try {
        await sequelize.authenticate();
        console.log("Successfully connecteed to Disnay DD")
    }catch(error){
        console.log(error)
    }
}

module.exports = {sequelize, connectDB}