import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { UserService } from '../services/UserService';

class UserController {
    async index(request: Request, response: Response) {
        const userService = new UserService;

        const users = await userService.showAll();

        return response.json({users});
    }

    async store(request: Request, response: Response) {
        const userService = new UserService;
        
        const { name, email } = request.body;

        const id = +uuid();

        const storeUser = await userService.insert({ id, name, email });

        return response.json({ storeUser, name, email });
    }

    async delete(request: Request, response: Response) {
        const userService = new UserService;

        const id = +request.params.id;

        const deleteUser = await userService.delete(id);

        return response.json();
    }

    async update(request: Request, response: Response) {
        const userService = new UserService;

        const id = +request.params.id;
        const { name, email } = request.body;

        const updateUser = await userService.update({ id, name, email });
        
        return response.json({ updateUser, name, email })
    }
}

export { UserController }