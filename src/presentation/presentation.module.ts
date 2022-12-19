import { Module } from "@nestjs/common";
import { CadastrarClienteService } from "../domain/mappers/cadastrar-cliente.services";
import { DomainModule } from "../domain/domain.module";
import { CadastroController } from "./http/cadastro.controller";

@Module({
    imports: [DomainModule],
    controllers: [CadastroController],
    providers: [CadastrarClienteService],
})

export class PresentationModule {}