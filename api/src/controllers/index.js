const { getAllRecipes, getAllRecipesByName, getInfoRecetaByid } = require('./controllerRequet');

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

// TODO constultar los tipos de dietas que existen 
const getTypes = (req, res) => {

}

const saveNewRecipe = (req, res) => {

}




module.exports = {
    getRecipes,
    getRecipesById,
    getTypes,
    saveNewRecipe
}