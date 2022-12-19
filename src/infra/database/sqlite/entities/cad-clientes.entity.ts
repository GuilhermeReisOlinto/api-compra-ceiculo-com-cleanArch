import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cad_clientes')
export class CadClientesEntity {
    @PrimaryGeneratedColumn()
    id_cliente: number;

    @Column({
        name: 'nome',
        type: 'varchar', 
    })
    nome: string;

    @Column({
        name: 'cpfClliente',
        type: 'varchar'
    })
    cpfCliente: string;

    @Column({
        name: 'cpfClliente',
        type: 'varchar'
    })
    endereco: string;

    @Column({
        name: 'cpfClliente',
        type: 'varchar'
    })
    numeroCelular: string;

    @Column({
        name: 'cpfClliente',
        type: 'integer'
    })
    renda: number;

}



