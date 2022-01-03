import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')

class User {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string
}

export { User }