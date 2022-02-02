const { getAllRecipes, getAllRecipesByName, getInfoRecetaByid } = require('./controllerRequet');
const { getTypeOfDietsDB, addNewRecipe } = require('./controllerBD');

const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;

        if(name) {
            const recetasByName = await getAllRecipesByName(name);
            res.json(recetasByName);
            return;
        }

        const todasRecetas = await getAllRecipes();
        res.json(todasRecetas);
        
    } catch(error) {
        console.log(error);
    }
}

const getRecipesById = async (req, res) => {
    try {
        const [id, typeRequet] = req.params.idReceta.split('-');

        if(!typeRequet || !id) {
            let err = new Error("Error en el id");
            err.statusText = "No se especificó un dato valido para hacer la petición";
            throw err;
        }

        const respuesta = await getInfoRecetaByid(id, typeRequet);
        res.json(respuesta);

    } catch (error) {
        res.status(400).json({msg: error})
    }
}

const getTypes = async (req, res) => {
    try {
        const lista = await getTypeOfDietsDB();
        res.json(lista);
    } catch (error) {
        res.status(400).json({msg: error})
    }
}

const saveNewRecipe = async (req, res) => {
    try {
        const { name, sumary, score, healthScore, instructions, img, diets } = req.body;
        
        if(!name || !sumary || !score || !healthScore || !instructions || !img || !diets) throw new Error("")
        
        const createdRecipe =  await addNewRecipe(req.body);
        res.json({msg: "hola"})

    } catch (error) {
        res.status(400).json({msg: "adios"})
    }
}




module.exports = {
    getRecipes,
    getRecipesById,
    getTypes,
    saveNewRecipe
}