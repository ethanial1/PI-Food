const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;
        if(!name) throw new Error("Parametro name requerido");
        
        console.log(name);
        res.json({name})


    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

const getRecipesById = (req, res) => {

}

const getTypes = (req, res) => {

}

const saveNewRecipe = (req, res) => {

}




module.exports = {
    getRecipes,
    getRecipesById,
    getTypes,
    saveNewRecipe
}