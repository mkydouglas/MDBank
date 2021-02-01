import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from 'src/app/Entities/ServiceResponse';
import { ContaPoupanca } from 'src/app/Entities/ContaPoupanca';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class ContaPoupancaService {

    constructor(private http: HttpClient) {

    }

    getConta() {
        return this.http.get<ContaPoupanca>(`https://mdbankapi.rj.r.appspot.com/ContaPoupanca`);
    }

    sacar(valor: number) {
        return this.http.post<ServiceResponse>(`https://mdbankapi.rj.r.appspot.com/ContaPoupanca/Sacar`, parseFloat(valor.toString()));
    }

    depositar(valor: number) {
        return this.http.post<ServiceResponse>(`https://mdbankapi.rj.r.appspot.com/ContaPoupanca/Depositar`, parseFloat(valor.toString()));
    }

    transferir(valor: number) {
        return this.http.post<ServiceResponse>(`https://mdbankapi.rj.r.appspot.com/ContaPoupanca/Transferir`, parseFloat(valor.toString()));
    }
}