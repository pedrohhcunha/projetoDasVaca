export default function handler(req, res) {
    console.log(req.body)

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return res.json({
        success: true,
        vaca_adicionada: {
            nome: req.body.nome,
            codigo: req.body.codigo,
            raca: req.body.raca,
            sexo: req.body.sexo,
            data: today,
            status: true
        }
    })
}