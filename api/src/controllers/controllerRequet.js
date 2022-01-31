const { getAllRecipiesDB, getRecipesByNameDB } = require('./controllerBD');
const { getAllRecipesAPI } = require('./controllerAPI');

const getAllRecipes = async () => {
    const recipesDB = await getAllRecipiesDB();
    const recipesAPI = await getAllRecipesAPI();
    const recetas = [...recipesDB, ...recipesAPI];

    return recetas;
}

const getAllRecipesByName = async (name) => {
    const recetasDB = await getRecipesByNameDB(name);

    return recetasDB;
}



module.exports = {
    getAllRecipes,
    getAllRecipesByName
}