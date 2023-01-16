
import { EstablishmentEntity } from 'src/controllers/establishment/entitty/establishment.entity';
import { VehiclesEntity } from 'src/controllers/vehicles/entitty/vehicles.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estacionamentos' })
export class ParkingEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'numero-da-vaga' })
    vacancyNumber: number;

    @Column({ type: "datetime", name: 'data-entrada' })
    entryDate: string;

    @Column({ type: "datetime", name: 'data-saida', nullable: true })
    departureDate: string;

    @Column({ type: "decimal", name: "valor-cobrado", nullable: true })
    amount: number

    @ManyToOne(type => EstablishmentEntity, establishment => establishment.id)
    @JoinColumn({ name: "establishmentId" })
    establishment: EstablishmentEntity;

    @ManyToOne(type => VehiclesEntity, vehicles => vehicles.id)
    @JoinColumn({ name: "vehiclesId" })
    vehicle: VehiclesEntity;
}
