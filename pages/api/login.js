export default function handler(req, res) {
    console.log(req.body)

    if(req.body.user === "pedro"){
        return res.json({
            success: true
        })
    } else {
        return res.json({
            success: false
        })
    }
}