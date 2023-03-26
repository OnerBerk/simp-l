import { UsersService } from '../../service/users.service/users.service';
import { Request, RequestHandler, Response } from 'express';
import { User } from '../../models/users';

const userService = new UsersService();
export class UsersController {
    findAll: RequestHandler = async (req: Request, res: Response) => {
        const users: User[] = await userService.findAll();
        return res
            .status(200)
            .json({ message: 'users fetched successfully', data: users });
    };
    findUserById: RequestHandler = async (req: Request, res: Response) => {
        const id = req.params.id;
        const user: User | null = await userService.findUserById(id);
        try {
            if (user === null) {
                return res
                    .status(404)
                    .json({ error: 'user not found' });
                //  throw new NotFoundException('Ustilisateur introuvable');
            } else {
                return res
                    .status(200)
                    .json({ message: 'user found', data: user });
            }
        } catch (e) {
            console.log('error', e);
        }
    };
    deleteUser: RequestHandler = async (req: Request, res: Response) => {
        const id = req.params.id;
        const user: User | null = await userService.findUserById(id);
        try {
            if (user === null) {
                return res
                    .status(404)
                    .json({ error: 'user not found' });
                //  throw new NotFoundException('Ustilisateur introuvable');
            } else {
                await User.destroy({ where: { id } });
                return res
                    .status(200)
                    .json({ message: 'user deleted successfully', data: user });
            }
        } catch (e) {
            console.log('error', e);
        }
    };
    createUser: RequestHandler = async (req: Request, res: Response) => {
        const { body } = req;
        if (
            !body.lastname ||
            !body.firstname ||
            !body.email) {
            return res
                .status(406)
                .json({ message: 'Tous les champs sont obligatoire' });
        } else {
            const newUser = await userService.createUser({ ...req.body });
            return res
                .status(201)
                .json({ message: 'users created successfully', data: newUser });

        }
    };
    updateUser: RequestHandler = async (req: Request, res: Response) => {
        const { body } = req;
        const id = req.params.id;
        const user: User | null = await User.findByPk(id);
        try {
            if (user === null) {
                return res
                    .status(404)
                    .json({ error: 'user not found' });
                //  throw new NotFoundException('Ustilisateur introuvable');
            } else {
                if (
                    !body.lastname ||
                    !body.firstname ||
                    !body.email) {
                    return res
                        .status(406)
                        .json({ message: 'Tous les champs sont obligatoire' });
                } else {
                    await User.update({ ...req.body }, { where: { id } });
                    return res
                        .status(200)
                        .json({ message: 'user updated successfully', data: user });
                }
            }
        } catch (e) {
            console.log('error', e);
        }
    };
}
