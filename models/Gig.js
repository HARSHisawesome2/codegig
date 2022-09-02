const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
id: {
         type: Sequelize.UUID,
              defaultValue:Sequelize.UUIDV4,
              allowNull: false,
              primaryKey: true 
      },
       username: {
               type: Sequelize.STRING,
               allowNull: false,
             },
      email: {
               type: Sequelize.STRING,
               allowNull: false,
               isEmail: true,
              unique : true,
             },
       password: {
               type: Sequelize.TEXT,
               min : 12 ,
               allowNull: false,
             }, 
      
      
});

User.sync().then(() => {
  console.log('table created');
});
module.exports = User;
