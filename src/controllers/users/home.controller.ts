import { Router } from 'express';
const HomeController = Router();

HomeController.get('/', (req, res) => {
    return res
        .status(200)
        .send(` you're at home 🏠`);
});

export { HomeController };