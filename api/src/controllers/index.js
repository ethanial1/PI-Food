const getRecipies = async (req, res) => {
    try {
        const name = req.query.name;
        if(!name) throw new Error("Parametro name requerido");



    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}




module.exports = {
    getRecipies
}