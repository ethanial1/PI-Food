const { getAllRecipiesDB, getRecipesByNameDB, getInfoRecetaByIdDB } = require('./controllerBD');
const { getAllRecipesAPI, getRecipesByNameAPI, getRecipeInfoByIdAPI } = require('./controllerAPI');

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

const getInfoRecetaByid = async (id, type) => {
    try {
        let recetas;
        if(type === 'DB') {
            recetas = await getInfoRecetaByIdDB(id);
        }
    
        if (type === 'API') {
            recetas = await getRecipeInfoByIdAPI(id);
        }

        return recetas;
    } catch (error) {
        return new Error(error);
    }
}

module.exports = {
    getAllRecipes,
    getAllRecipesByName,
    getInfoRecetaByid
}