import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SalvaClienteCadCliente } from "src/infra/database/sqlite/implementation/salva-cliente.service";

@Injectable()
export class CadastrarClienteService {
    constructor (private salvaClienteCadCliente: SalvaClienteCadCliente) {}
    cadastrarCliente(bodyRequestClient){
        if(!bodyRequestClient) {
            throw new HttpException({ reason: 'Os dados da requisicao estao incorretos' }, HttpStatus.BAD_REQUEST)
        } 
        
        this.salvaClienteCadCliente.salvar(bodyRequestClient)
        return 'sucess';
    }
}