const axios = require('axios').default;
const { API_KEY } = process.env;

const getAllRecipesAPI = async () => {
    try {
        let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);
        console.log(recipes.data.results[0])
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

const getRecipesByName = async (name) => {
    try {
        let recetas = await axios.get("")
    } catch (error) {
        
    }
}


module.exports = {
    getAllRecipesAPI
}