const server = require('../../src/app')
const session = require('supertest-session');

const agent = session(server);

describe('Recipes', () => {
    describe('GET /recipes', () => {
        it('should responds with 200 status', () => agent.get('/recipes').expect(200));

        it('should responds with an array with 100 elements', () => 
            agent.get('/recipes')
            .then(res => {
                expect(res.body.length).toBe(100)
            })
        )

        it('should responds with and array and in the first position should be and aobject like this: {}', () =>
            agent.get('/recipes')
            .then(res => {
                expect(res.body[0]).toEqual(
                    {
                        id: "716426-API",
                        name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
                        img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
                        score: 100,
                        diets: [
                          "gluten free",
                          "dairy free",
                          "lacto ovo vegetarian",
                          "vegan"
                        ]
                      },
                )
            })
        )
    });

    describe('GET /recipes?name=(name)', () => {
        it('should responds with 200 status', () => agent.get('/recipes?name=pollo').expect(200));

        it('should responds with an array with 3 elements if name is equal to pollo', () =>
            agent.get('/recipes?name=pollo')
            .then(res => {
                expect(res.body.length).toBe(3)
            })
        )

        it('should return an empty array if name is not a recipe name valid', () => 
            agent.get('/recipes?name=qwerty')
            .then(res => {
                expect(res.body.length).toBe(0)
            })
        )
    });

    describe('GET /recipes/:idReceta', () => {
        it('should responds with 200 status', () => agent.get('/recipes/3-API').expect(200));

        it('should responds with an object when idReceta is valid', () => 
            agent.get('/recipes/3-API')
            .then(res => {
                expect(res.body).toHaveProperty('id','name','img','summary','score','healthScore','instructions', 'diets')
            })
        )

        it('should responds with 400 bad request status when idReceta has not a valid format', () => agent.get('/recipes/3').expect(400))

        it('should responds with and object, the object has the property msg', () => 
            agent.get('/recipes/3')
            .then(res => {
                expect(res.body).toHaveProperty('msg')
            })
        )

        it('should responds with the statusText "No se especificó un dato valido para hacer la petición" when idReceta is not valid', () => 
            agent.get('/recipes/3')
            .then(res => {
                expect(res.body.msg.statusText).toMatch("No se especificó un dato valido para hacer la petición")
            })
        )
    })

    describe('POST /recipe', () => {
        it('should responds with 200 status code when we send the correct object', () => {
            agent.post('/recipe')
            .send({
                img: "https://tse3.mm.bing.net/th?id=OIP.y-dXCFWoMM_DmNI5tfyiHgHaE8&pid=Api",
                name: "Tacos al pastor",
                summary: "Receta de tacos al pastor, receta Mexicana",
                score: 100,
                healthScore: 30,
                instructions: "Se deben de comprar los tacos con un taquero",
                diets: [1,2]
            })
            .then(res => {
                expect(res.body).toEqual({
                    isDB: true,
                    id: 1,
                    img: "https://tse3.mm.bing.net/th?id=OIP.y-dXCFWoMM_DmNI5tfyiHgHaE8&pid=Api",
                    name: "Tacos al pastor",
                    summary: "Receta de tacos al pastor, receta Mexicana",
                    score: 100,
                    healthScore: 30,
                    instructions: "Se deben de comprar los tacos con un taquero",
                    updatedAt: expect.any(String),
                    createdAt: expect.any(String)
                })
            })
        })

        it('should responds with 400 status when body is empty', () => agent.post('/recipe').expect(400));

        it('should responds with the message "adios" when body is empty', () => {
            agent.post('/recipe')
            .send({})
            .then(res => {
                expect(res.body.msg).toMatch("adios")
            })
        })

        it('should responds with the message "adios" when any key is not valid', () => {
            agent.post('/recipe')
            .send({
                name: "Tacos al pastor",
                summary: "Receta de tacos al pastor, receta Mexicana",
                score: 100,
                healthScore: 30,
            })
            .then(res => {
                expect(res.body.msg).toMatch("adios")
            })
        })
    })
});

