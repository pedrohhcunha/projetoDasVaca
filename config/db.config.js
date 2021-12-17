//Imprta as bibliotecas necessárias para a execução do código
const { Pool } = require('pg');

//Define a configuração para conexão com o banco de dados
module.exports = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: process.env.SSL || false
})