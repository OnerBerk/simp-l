import { User } from '~/domain/user';
import { NotFoundException } from '../exceptions/exceptions';

export class UsersService {
    users: User[] = [
        { id: 1, name: 'oner' },
        { id: 2, name: 'Nimet' },
        { id: 3, name: 'Berk' },
        { id: 4, name: 'Ebru' },
        { id: 5, name: 'AliRiza' },

    ];
    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    update(userData: Partial<User>, id: number): User | NotFoundException {
        const user = this.users.findIndex(user => user.id === id);

        if (user === -1) {
            throw new NotFoundException('Utilisateur introuvable');
        }
        delete userData.id;

        this.users[user] = { ...this.users[user], ...userData };
        return this.users[user];
    }

    create(userData: Omit<User, 'id'>): User {
        const newUser: User = {
            ...userData,
            /* /!\ Ne pas faire ceci dans un vrai projet */
            id: Math.floor(Math.random() * 100),
        };

        this.users.push(newUser);
        return newUser;
    }

    delete(id: number) {
        this.users = this.users.filter(user => user.id !== id);
    }

}