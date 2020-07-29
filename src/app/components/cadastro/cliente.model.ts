import{Endereco} from '../endereco/endereco.model';

export class  Cliente{

    id: number = 0;
    nome: string = '';
    dataNascimento: string = '';
    enderecos: Array<Endereco> = new Array<Endereco>();

}