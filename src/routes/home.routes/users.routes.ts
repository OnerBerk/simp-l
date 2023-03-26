import { Router } from 'express';
import { UsersController } from '../../controllers/users/users.controller';

const router = Router();
const userController = new UsersController();

router.get('/', userController.findAll);
router.get('/:id', userController.findUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.patch('/:id', userController.updateUser);
export default router;