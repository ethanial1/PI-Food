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
        const receta = await Recipe.findByPk(idReceta);
        return receta;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllRecipiesDB,
    getRecipesByNameDB,
    getInfoRecetaByIdDB
}