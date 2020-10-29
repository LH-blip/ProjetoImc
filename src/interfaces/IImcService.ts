import { Imc } from 'src/models/Imc';

export interface IImcService {
    calcularImc(imc: Imc) : number;
}