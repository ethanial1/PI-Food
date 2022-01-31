const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRecipes, getRecipesById, getTypes, saveNewRecipe } = require('../controllers/index');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', getRecipes);

router.get('/types', getTypes)

router.post('/recipe', saveNewRecipe)

router.get('/recipes/:idReceta', getRecipesById)



module.exports = router;
