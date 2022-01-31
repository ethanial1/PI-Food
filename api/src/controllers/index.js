const { getAllRecipes, getAllRecipesByName } = require('./controllerRequet');

const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;

        if(name) {
            const recetasByName = await getAllRecipesByName(name);
            res.json(recetasByName);
            return;
        }

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