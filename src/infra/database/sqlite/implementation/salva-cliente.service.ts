import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CadClientesEntity } from "../entities/cad-clientes.entity";

export class SalvaClienteCadCliente {
    constructor (
        @InjectRepository(CadClientesEntity)
        private cadClientesEntity: Repository<CadClientesEntity>,
    ) {}

    salvar (bodyRequestClient) {
        return this.cadClientesEntity.save(bodyRequestClient)
    }
}