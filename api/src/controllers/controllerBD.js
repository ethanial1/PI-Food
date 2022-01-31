const { Recipe, TypeOfDiet, Op } = require('../db');

const getAllRecipiesDB = async () => {
    try {
        const recipes = await Recipe.findAll();
        return recipes;

    } catch (error) {
        console.log(error);
    }
}

const getRecipesByNameDB = async (name) => {
    try {
        const recetas = await Recipe.findAll({ 
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        });

        return recetas;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllRecipiesDB,
    getRecipesByNameDB
}