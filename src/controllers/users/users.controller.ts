import { Router } from 'express';
import { UsersService } from '../../service/users.service';
import { NotFoundException, BadRequestException } from '../../exceptions/exceptions';

const UsersController = Router();
const userService = new UsersService();

UsersController.get('/', (req, res) => {
    return res
        .status(200)
        .json(userService.findAll());
});
UsersController.post('/', (req, res) => {
    const createdPet = userService.create(req.body);

    return res
        .status(201)
        .json(createdPet);
});
UsersController.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException('ID non valide');
    }

    const user = userService.findOne(id);

    if (!user) {
        throw new NotFoundException('Animal introuvable');
    }

    return res
        .status(200)
        .json(user);
});
UsersController.patch('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException('ID invalide');
    }

    const updatedPet = userService.update(req.body, id);

    return res
        .status(200)
        .json(updatedPet);
});
UsersController.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        throw new BadRequestException('ID invalide');
    }

    return res
        .status(200)
        .json(userService.delete(id));
});

export { UsersController };