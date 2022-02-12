const { Recipe, Diet, conn } = require('../../src/db')
const { expect } = require('chai');

describe('Model Testing', () => {
    afterAll(async () => {
        await conn.sync({ force: true });
        conn.close();
    })

    describe('Diet Model', () => {
        beforeEach(async () => await Diet.sync({ force: true }))

        describe('validations', () => {
            it('shoudl be create a diet type correctly',done => {
                Diet.create({nombre: "Deliciosa"})
                .then(() => done())
                .catch(() => done(new Error('Deberia haberlo creado')))
            })

            it('should throw an error if nombre is null', done => {
                Diet.create({})
                .then(() => done(new Error('nombre es requerido')))
                .catch(() => done())
            })
        });
    });

    describe('Recipe Model', () => {
        beforeEach(async () => { 
            await Recipe.sync({ force: true })
        })

        describe('validations', () => {
            it('should throw an error if name is null', done => {
                Recipe.create({
                    img: "url falsa",
                    summary: "Receta de tacos al pastor, receta Mexicana",
                })
                .then(() => done(new Error('name is required')))
                .catch(() => done())
            })

            it('should throw an error if img is null', done => {
                Recipe.create({
                    name: "Tacos al pastor",
                    summary: "Receta de tacos al pastor, receta Mexicana",
                })
                .then(() => done(new Error('img is required')))
                .catch(() => done())
            })

            it('should throw an error if summary is null', done => {
                Recipe.create({
                    name: "Tacos al pastor",
                    img: "url falsa",
                })
                .then(() => done(new Error('summary is required')))
                .catch(() => done())
            })

            it('should create a recipe if only have name, img and summary', done => {
                Recipe.create({
                    name: "Tacos al pastor",
                    img: "url falsa",
                    summary: "Receta muy complicada"
                })
                .then(() => done())
                .catch(() => done(new Error('No se pudo crear la receta con solo name, img and summary')))
            })

            it('shoudl create a recipe if we send all propertys', done => {
                Recipe.create({
                    name: "Tacos al pastor",
                    img: "url falsa",
                    summary: "Los tacos son muy ricos",
                    score: 90,
                    healthScore: 70,
                    instructions: "son muchos pasos"
                })
                .then(() => done())
                .catch(() => done(new Error('Error al crear la receta')))
            })
        })
    });
});