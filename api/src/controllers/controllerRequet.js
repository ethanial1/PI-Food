const { getAllRecipiesDB, getRecipesByNameDB } = require('./controllerBD');
const { getAllRecipesAPI, getRecipesByNameAPI } = require('./controllerAPI');

const getAllRecipes = async () => {
    const recipesDB = await getAllRecipiesDB();
    const recipesAPI = await getAllRecipesAPI();
    const recetas = [...recipesDB, ...recipesAPI];

    return recetas;
}

const getAllRecipesByName = async (name) => {
    const recetasDB = await getRecipesByNameDB(name);
    const recetasAPI = await getRecipesByNameAPI(name);
    const res = [...recetasDB, ...recetasAPI];
    
    return res;
}



module.exports = {
    getAllRecipes,
    getAllRecipesByName
}