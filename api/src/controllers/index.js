const { getAllRecipes, getAllRecipesByName } = require('./controllerRequet');

const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;

        if(name) {
            const recetasByName = await getAllRecipesByName(name);
            res.json(recetasByName);
            return;
        }
        
    } catch(w){}
}

const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;
        if(!name) throw new Error("Parametro name requerido");
        
        console.log(name);
        res.json({name})

        const recipes = await getAllRecipes();
        res.json(recipes);

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