import express from 'express';
import router from './tutorRoute.js';
import routerAbrigo from './abrigoRoute.js';
import routerPet from './petRoute.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Web app para adoção de pets"});
    })

    app.use(
        express.json(),
        router,
        routerAbrigo,
        routerPet
    )
}

export default routes;