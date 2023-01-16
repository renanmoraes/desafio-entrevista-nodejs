
import { TypeVehicles } from 'src/core/enums/typeVehicles';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'veiculos' })
@Index(["license"], { unique: true })
export class VehiclesEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 250, name: "marca" })
    brand;

    @Column({ type: "varchar", length: 250, name: "modelo" })
    model;

    @Column({ type: "varchar", length: 100, name: "cor" })
    color;

    @Column({ type: "varchar", length: 10, name: "placa" })
    license;

    @Column({ type: "enum", name: "estado", enum: TypeVehicles })
    type: TypeVehicles;
}
