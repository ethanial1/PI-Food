const { Recipe, Diet, Op } = require('../db');

const getAllRecipiesDB = async () => {
    try {
        const recipes = await Recipe.findAll(
            {
                attributes: ['id','name','img'],
                include: Diet
            }
        );
        return recipes;

    } catch (error) {
        console.log(error);
    }
}

const getRecipesByNameDB = async (name) => {
    try {
        const recetas = await Recipe.findAll({ 
            attributes: ['id','name','img'],
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
            include: Diet
        });

        return recetas;
    } catch (error) {
        console.log(error);
    }
}

const getInfoRecetaByIdDB = async (idReceta) => {
    try {
        const receta = await Recipe.findByPk(
            idReceta,
            {
                attributes: ['id','name','img'],
                include: Diet
            }
        );
        return receta;
    } catch (error) {
        console.log(error);
    }
}

// TODO precargar la lista de dietas disponible que se listan 
// aquí: https://spoonacular.com/food-api/docs#Diets
const addTypeOfDiets = async () => {

}

// TODO función para obtener los tipos de dietas existentes, si no 
// hay ninguna, carga la lista de dietas en base a la función de arriba.
const getTypeOfDiets = async () => {

}


module.exports = {
    getAllRecipiesDB,
    getRecipesByNameDB,
    getInfoRecetaByIdDB
}