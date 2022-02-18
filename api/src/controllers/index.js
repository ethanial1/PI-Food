const { getAllRecipes, getAllRecipesByName, getInfoRecetaByid } = require('./controllerRequet');
const { getTypeOfDietsDB, addNewRecipe } = require('./controllerBD');

// Funciones de las rutas
const getRecipes = async (req, res) => {
    try {
        const name = req.query.name;

        if(name) {
            const recetasByName = await getAllRecipesByName(name);
            res.json(recetasByName);
            return;
        }

        //const todasRecetas = await getAllRecipes();
        //res.json(todasRecetas);
        getAllRecipes().then(respuesta => res.json(respuesta))
        
    } catch(error) {
        console.log(error)
        res.status(400).json({msg: error})
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
        console.log(error)
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
        const { img, name, summary, score, healthScore, instructions, diets } = req.body;
        console.log(diets)
        //const img = req.file.filename;
        if(!name || !summary || !score || !healthScore || !instructions || !img || !diets) {
            //Eliminar la imagen que se guardo y lanzar el error // ----> no aplica debido a que ahora recibimos una url y no el archivo.
            throw new Error("");
        }
        
        const createdRecipe =  await addNewRecipe(req.body);
        res.json(createdRecipe);

    } catch (error) {
        console.log('save new recipe',error)
        res.status(400).json({msg: "adios"})
    }
}

const getImgRecipe = (req, res) => {
    const img = req.params.idimg;
    res.sendFile(img, {root: 'src/assets/'})
}





module.exports = {
    getImgRecipe,
    getRecipes,
    getRecipesById,
    getTypes,
    saveNewRecipe,
}