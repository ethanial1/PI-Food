const { Recipe, Diet, Op } = require('../db');

const getAllRecipiesDB = async () => {
    try {
        const recipesData = await Recipe.findAll(
            {
                attributes: ['id','name','img'],
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
                include: {
                    model: Diet,
                    attributes: ['nombre'],
                    through:{
                        attributes: []
                    }
                }
            }
        );
        return receta;
    } catch (error) {
        console.log(error);
    }
}

const addTypeOfDiets = async () => {
    const TypesOfDiets = [
        {nombre: "Gluten Free"},
        {nombre: "Ketogenic"},
        {nombre: "Vegetarian"},
        {nombre: "Lacto-Vegetarian"},
        {nombre: "Ovo-Vegetarian"},
        {nombre: "Vegan"},
        {nombre: "Pescetarian"},
        {nombre: "Paleo"},
        {nombre: "Primal"},
        {nombre: "Low FODMAP"},
        {nombre: "Whole30"}
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

const addNewRecipe = async (body, img) => {
    const { diets: dietas, ...rest } = body;

    try {
        const createRecipe = await Recipe.create({...rest, img});
        // TODO editar la forma en que añadimos los tipos de dieta, debemos de recibir un array
        await createRecipe.addDiet([1,2,3,4]);

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