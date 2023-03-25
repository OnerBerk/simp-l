import { NotFoundException } from '../../exceptions/exceptions';
import { RequestHandler } from 'express';
import { User } from '../../models/users';

export class UsersService {
    createUser: RequestHandler = async (req, res, next) => {
        const user = await User.create({ ...req.body });
        return res
            .status(200)
            .json({ message: 'users created successfully', data: user });

    };
    findAll: RequestHandler = async (req, res, next) => {
        const allUsers: User[] = await User.findAll();
        return res
            .status(200)
            .json({ message: 'users fetched successfully', data: allUsers });

    };
    findUserById: RequestHandler = async (req, res, next) => {
        const id = req.params.id;
        const user: User | null = await User.findByPk(id);
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
    updateUser: RequestHandler = async (req, res, next) => {
        const id = req.params.id;
        const user: User | null = await User.findByPk(id);
        try {
            if (user === null) {
                return res
                    .status(404)
                    .json({ error: 'user not found' });
                //  throw new NotFoundException('Ustilisateur introuvable');
            } else {
                await User.update({ ...req.body }, { where: { id } });
                return res
                    .status(200)
                    .json({ message: 'user updated successfully', data: user });
            }
        } catch (e) {
            console.log('error', e);
        }
    };
    deleteUser: RequestHandler = async (req, res, next) => {
        const id = req.params.id;
        const user: User | null = await User.findByPk(id);
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
                    .json({ message: 'users deleted successfully', data: user });
            }
        } catch (e) {
            console.log('error', e);
        }
    };

}