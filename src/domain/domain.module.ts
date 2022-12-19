import { Module } from "@nestjs/common";
import { SalvaClienteCadCliente } from "../infra/database/sqlite/implementation/salva-cliente.service";
import { CadastrarClienteService } from "./mappers/cadastrar-cliente.services";

@Module({
    imports: [],

    providers: [CadastrarClienteService, SalvaClienteCadCliente],
})

export class DomainModule {};
