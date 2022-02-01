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

// TODO vamos a recibir un id de tipo "1-DB || 1-API" y en base al segundo argumento
// vamos a evaluar a donde ir a hacer la petición.
const getRecipesById = async (req, res) => {
    try {
        const [id, typeRequet] = req.params.idReceta.split('-');

        if(!typeRequet) {
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