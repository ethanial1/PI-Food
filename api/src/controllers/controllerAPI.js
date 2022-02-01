const axios = require('axios').default;
const { API_KEY } = process.env;

const getAllRecipesAPI = async () => {
    try {
        let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);
        recipes = recipes.data.results.map(res => (
            {
                id: res.id,
                name: res.title,
                img: res.image,
                diets: res.diets
            }
        ));

        return recipes;
    } catch (error) {
        console.log(error)
    }
}

const getRecipesByNameAPI = async (name) => {
    try {
        let recetas = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&titleMatch=${name}&number=10`);
        recetas = recetas.data.results.map(res => (
            {
                id: res.id,
                name: res.title,
                img: res.image,
                diets: res.diets
            }
        ));

        return recetas;

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllRecipesAPI,
    getRecipesByNameAPI
}