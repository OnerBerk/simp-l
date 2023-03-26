import { Router } from 'express';
import { HomeController } from '../../controllers/home.controller/home.controller';

const homeController = new HomeController();
const router = Router();

router.get('/', homeController.home);
export default router;