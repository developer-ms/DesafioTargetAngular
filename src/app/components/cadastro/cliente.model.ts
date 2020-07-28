import{Endereco} from '../endereco/endereco.model';

export class Cliente{

    Id: number;
    Nome: string;
    DataNascimento: string;
    Enderecos: Array<Endereco> = new Array<Endereco>();

}