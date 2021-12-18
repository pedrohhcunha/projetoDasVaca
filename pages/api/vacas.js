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
                    let vacas = result.rows.map(row => {
                        return {
                            nome: row.nome,
                            codigo: row.codigo_brinco,
                            raca: row.raca,
                            data: row.data_cadastro.toISOString().slice(0, 10),
                            status: row.nome
                        }
                    })
                    console.log(result.rows)
                    return res.json({
                        success: true,
                        message: "Vacas enviadas com sucesso!",
                        vacas: vacas
                    })
                }
            })
        }
    })
}