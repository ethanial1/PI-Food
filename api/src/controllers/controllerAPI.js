const axios = require('axios').default;
const { API_KEY2 } = process.env;

const getAllRecipesAPI = async () => {
    try {
        let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=10`);
        recipes = recipes.data.results.map(res => (
            {
                id: `${res.id}-API`,
                name: res.title,
                img: res.image,
                score: res.spoonacularScore,
                diets: res.diets,
            }
        ));

        return recipes;
    } catch (error) {
        console.log(error)
    }
}

const getRecipesByNameAPI = async (name) => {
    try {
        let recetas = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&titleMatch=${name}&number=10`);
        recetas = recetas.data.results.map(res => (
            {
                id: `${res.id}-API`,
                name: res.title,
                img: res.image,
                score: res.spoonacularScore,
                diets: res.diets
            }
        ));

        return recetas;

    } catch (error) {
        console.log(error);
    }
}

const getRecipeInfoByIdAPI = async (id) => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`);
        
        return {
            id: data.id,
            name: data.title,
            img: data.image,
            summary: data.summary,
            score: data.spoonacularScore,
            healthScore: data.healthScore,
            instructions: data.instructions,
            diets: data.diets
        };
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllRecipesAPI,
    getRecipesByNameAPI,
    getRecipeInfoByIdAPI
}