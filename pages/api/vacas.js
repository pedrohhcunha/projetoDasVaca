const pool = require('../../config/db.config')

export default function handler(req, res) {
    console.log("Requisição dos dados das vacas!")

    pool.connect((error, client, release) => {
        if (error) {
            console.error('Erro na conexão com o banco de dados: ', error)
            return res.json({
                success: false,
                message: "Erro do servidor, tente mais tarde!"
            })
        } else {
            client.query(`SELECT * FROM vaca;`, (error, result) => {
                release()
                
                if (error) {
                    console.error('Erro na execução da query: ', error.stack)
                    return res.json({
                        success: false,
                        message: "Erro do servidor, tente mais tarde!"
                    })
                } else {
                    console.log(result.rows)
                    return res.json({
                        success: true,
                        message: "Vacas enviadas com sucesso!",
                        vacas: result.rows
                    })
                }
            })
        }
    })
}