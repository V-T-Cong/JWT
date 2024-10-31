import express from 'express';
import homeController from '../controller/homeController';


const router = express.Router();

const initWebroutes = (app) => {

    router.get("/", homeController.handleHelloWorld);
    router.get("/login", homeController.handleLogin);

    return app.use("/", router);
}

export default initWebroutes