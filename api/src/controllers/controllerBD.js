const { Recipe, Diet, Op } = require('../db');

const getAllRecipiesDB = async () => {
    try {
        const recipesData = await Recipe.findAll(
            {
                attributes: ['id','name','img','score'],
                include: {
                    model: Diet,
                    attributes: ['nombre'],
                    through:{
                        attributes: []
                    }
                }
            }
        );
        
        const recipes = recipesData.map(receta => ({
            id: receta.id,
            name: receta.name,
            img: receta.img,
            score: receta.score,
            diets: receta.diets.map(dieta => dieta.nombre)
        }))

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
            include: {
                model: Diet,
                attributes: ['nombre'],
                through:{
                    attributes: []
                }
            }
        });

        const recipes = recetas.map(receta => ({
            id: receta.id,
            name: receta.name,
            img: receta.img,
            score: receta.score,
            diets: receta.diets.map(dieta => dieta.nombre)
        }))


        return recipes;
    } catch (error) {
        console.log(error);
    }
}

const getInfoRecetaByIdDB = async (idReceta) => {
    try {
        const receta = await Recipe.findByPk(
            idReceta,
            {
                attributes: {
                    exclude: ['updatedAt', 'createdAt','isDB']
                },
                include: {
                    model: Diet,
                    attributes: ['nombre'],
                    through:{
                        attributes: []
                    }
                }
            }
        );

        const auxReceta = {
            id: receta.id,
            name: receta.name,
            img: receta.img,
            summary: receta.summary,
            score: receta.score,
            healthScore: receta.healthScore,
            instructions: receta.instructions,
            diets: receta.diets.map(dieta => dieta.nombre)
        }
        return auxReceta;
    } catch (error) {
        console.log('error ------- ',error);
    }
}

const addTypeOfDiets = async () => {
    const TypesOfDiets = [
        {nombre: 'vegetarian'},
        {nombre: 'lacto vegetarian'},
        {nombre: 'ovo vegetarian'},
        {nombre: 'vegan'},
        {nombre: 'pescetarian'},
        {nombre: 'paleolithic'},
        {nombre: 'dairy free'},
        {nombre: 'primal'},
        {nombre: 'whole30'},
        {nombre: 'gluten free'},
        {nombre: 'lacto ovo vegetarian'}
    ]

    try {
        const listaDietas = await Diet.bulkCreate(TypesOfDiets, { returning: true});
        return listaDietas;
    } catch (error) {
        console.log(error)
    }
}

const getTypeOfDietsDB = async () => {
    try {
        let dietasList = await Diet.findAll();

        if(dietasList.length === 0) {
            dietasList = await addTypeOfDiets();
        }
        return dietasList;

    } catch (error) {
        console.log(error)
    }
}

const addNewRecipe = async (body) => {
    const { diets: dietas, ...rest } = body;

    try {
        const createRecipe = await Recipe.create({...rest});
        await createRecipe.addDiet(dietas);

        return createRecipe;

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllRecipiesDB,
    getRecipesByNameDB,
    getInfoRecetaByIdDB,
    getTypeOfDietsDB,
    addNewRecipe
}