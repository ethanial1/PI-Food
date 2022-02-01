const { getAllRecipes, getAllRecipesByName } = require('./controllerRequet');

const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;

        if(name) {
            const recetasByName = await getAllRecipesByName(name);
            res.json(recetasByName);
            return;
        }

        const todasRecetas = await getAllRecipes();
        res.json(todasRecetas);
        
    } catch(error) {
        console.log(error);
    }
}

// TODO vamos a recibir un id de tipo "1-DB || 1-API" y en base al segundo argumento
// vamos a evaluar a donde ir a hacer la petición.
const getRecipesById = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
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