import{Endereco} from '../endereco/endereco.model';

export class Cliente{

    Id: number;
    Nome: string;
    DataNascimento: Date;
    Enderecos: Array<Endereco> = new Array<Endereco>();

}