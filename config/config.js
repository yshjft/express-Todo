require('dotenv').config();

module.exports={
    development:{
        username : "root",
        password : process.env.SEQUELIZE_PASSWORD,
        database : "todo",
        host : "127.0.0.1",
        dialect : "mysql",
        operatorAliases : false,
    },
    production:{
        username : "root",
        password : process.env.SEQUELIZE_PASSWORD,
        database : "todo",
        host : "127.0.0.1",
        dialect : "mysql",
        operatorAliases : false,
        logging : false,
    }
};