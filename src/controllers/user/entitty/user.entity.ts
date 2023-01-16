
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'usuarios' })
@Index(["user"], { unique: true })
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 250, name: "usuario" })
    user;

    @Column({ type: "varchar", name: "senha", select: false })
    password;
}
