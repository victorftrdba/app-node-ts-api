import { getRepository } from 'typeorm';
import { idText } from 'typescript';
import { User } from '../models/User';

interface IUser {
    id: number,
    name: string,
    email: string
}

class UserService {
    async insert({ id, name, email }: IUser) {
        
        const user = await getRepository(User)
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                {
                    id: id,
                    name: name,
                    email: email
                }
            ])
            .execute();
        
        return user;
    }

    async showAll() {
        
        const users = await getRepository(User)
        .createQueryBuilder("user")
        .getMany();
        
        return users;
    }

    async delete(id:number) {
        const deleteUser = await getRepository(User)
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id })
        .execute();
        
        return deleteUser;
    }

    async update({ id, name, email }:IUser) {
        const updateUser = await getRepository(User)
        .createQueryBuilder()
        .update(User)
        .set({ name, email })
        .where("id = :id", { id })
            .execute();
        
        return updateUser;
    }
}

export { UserService }
