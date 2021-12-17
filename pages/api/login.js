const pool = require('../../config/db.config')

export default function handler(req, res) {
    console.log(`Tentativa de login do usuário: ${req.body.user}`)
    if(req.body.user && req.body.password){
        pool.connect((error, client, release) => {
            if (error) {
                console.error('Erro na conexão com o banco de dados: ', error)
                return res.json({
                    success: false,
                    message: "Erro do servidor, tente mais tarde!"
                })
            } else {
                client.query(`SELECT * 
                    FROM usuario 
                    WHERE nome_usuario = '${req.body.user}';`, (error, result) => {
                    release()
                    
                    if (error) {
                        console.error('Erro na execução da query: ', error.stack)
                        return res.json({
                            success: false,
                            message: "Erro do servidor, tente mais tarde!"
                        })
                    } else {
                        if(result.rows.length > 0  && result.rows[0].hash_senha === req.body.password){
                            console.log(`Login realizado com o usuário: ${req.body.user}`)
                            return res.json({
                                success: true,
                                message: "Usuário encontrado!"
                            })
                        } else {
                            console.log("Usuário ou senha incorretos!")
                            return res.json({
                                success: false,
                                message: "Usuário ou senha incorretos!"
                            })
                        }
                    }
                })
            }
        })
    } else {
        console.log("Os dados requeridos não foram passados!")
        return res.json({
            success: false,
            message: "Os dados requeridos não foram passados!"
        })
    }
}