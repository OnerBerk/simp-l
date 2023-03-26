import { NotFoundException } from '../../exceptions/exceptions';
import { RequestHandler } from 'express';
import { User } from '../../models/users';
import { Identifier } from 'sequelize';

export class UsersService {
    findAll = async () => {
        const allUsers: User[] = await User.findAll();
        return allUsers;
    };
    findUserById = async (id: Identifier) => {
        const user: User | null = await User.findByPk(id);
        return user;
    };
    createUser = async (user: User) => {
        const newUser = { ...user };
        return await User.create(newUser);
    };
    updateUser = async  (id: Identifier, user: User) => {
        const findUser: User | null = await User.findByPk(id);
    };
}