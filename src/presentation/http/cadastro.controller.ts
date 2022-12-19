import { Controller } from "@nestjs/common";
import { Body, Post } from "@nestjs/common/decorators";
import { CadastrarClienteService } from "../../domain/mappers/cadastrar-cliente.services";
import { ValidaDadosClientes } from "../dto-controller/valida-cliente.dto";

@Controller('api')
export class CadastroController {
    constructor (private cadastrarClienteService: CadastrarClienteService) {}
    @Post('/cadastrar/cliente')
    cadastrar(@Body() bodyRequestClient: ValidaDadosClientes) {
        return this.cadastrarClienteService.cadastrarCliente(bodyRequestClient)
    }
}