import { Injectable } from '@angular/core';
import { IImcService } from 'src/interfaces/IImcService';
import { Imc } from 'src/models/Imc';

Injectable ({
    'providedIn': 'root'
})

export class ImcService implements IImcService {
    calcularImc(imc: Imc) : number {
        if (!imc.peso && !imc.altura) throw new Error('Obrigatório preencher o peso e altura.');
        if (!imc.altura) throw new Error('Obrigatório preencher altura.');
        if (!imc.peso) throw new Error('Obrigatório preencher o peso');
        
        imc.resultadoImc = parseFloat((imc.peso / (imc.altura ** 2)).toFixed(2)); 
        return imc.resultadoImc;
    }

}