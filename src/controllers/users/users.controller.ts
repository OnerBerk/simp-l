import { Router } from 'express';
import { UsersService } from '../../service/users.service/users.service';

const UsersController = Router();
const userService = new UsersService();

UsersController.get('/', userService.findAll);
UsersController.get('/:id', userService.findUserById);
UsersController.post('/', userService.createUser);
UsersController.delete('/:id', userService.deleteUser);
UsersController.patch('/:id', userService.updateUser);

export { UsersController };