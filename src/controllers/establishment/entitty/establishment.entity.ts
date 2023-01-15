
import { State } from 'src/core/enums/state';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'estabelecimento' })
@Index(["cnpj"], { unique: true })
export class EstablishmentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 250, name: "nome" })
    name: string;

    @Column({ type: "varchar", length: 14, name: "cnpj" })
    cnpj: string;

    @Column({ type: "varchar", length: 11, name: "telefone" })
    phone: string;

    @Column({ type: "varchar", length: 8, name: "cep" })
    cep: string;

    @Column({ type: "varchar", name: "numero" })
    number: string;

    @Column({ type: "varchar", name: "complemento", nullable: true })
    complement: string;

    @Column({ type: "varchar", name: "rua" })
    street: string;

    @Column({ type: "varchar", name: "bairro" })
    district: string;

    @Column({ type: "varchar", name: "cidade" })
    city: string;

    @Column({ type: "varchar", length: 2, name: "estado", enum: State })
    state: string;

    @Column({ type: "varchar", name: "pais" })
    country: string;

    @Column({ default: 0, name: "vagas-para-motos" })
    vacancyForMotorcycles: number;

    @Column({ default: 0, name: "vagas-para-carros" })
    vacancyForCars: number;
}
