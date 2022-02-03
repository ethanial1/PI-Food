const { Router } = require('express');
const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRecipes, getRecipesById, getTypes, saveNewRecipe, getImgRecipe } = require('../controllers/index');


const router = Router();


// Configuración de Multer
const storage = multer.diskStorage({
    destination: 'src/assets/',
    filename: (req, file, cb) => {
        cb("",Date.now()+file.originalname);
    }
})

const upload = multer({ storage }).single('img');

// Configurar los routers
router.get('/recipes', getRecipes);

router.get('/types', getTypes)

router.post('/recipe', upload, saveNewRecipe)

router.get('/recipes/:idReceta', getRecipesById)

router.get('/assets/:idimg', getImgRecipe)



module.exports = router;
