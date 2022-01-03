import { Request, Response, Router } from 'express';
import { UserController } from './controllers/UserController';

const routes = Router();
const userController = new UserController();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ success: 'Worked!' });
});

routes.get('/users', userController.index);
routes.post('/users', userController.store);
routes.delete('/users/:id', userController.delete);
routes.put('/users/:id', userController.update);

export { routes }