import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContaCorrente } from 'src/app/Entities/ContaCorrente';
import { ServiceResponse } from 'src/app/Entities/ServiceResponse';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class ContaCorrenteService {

    constructor(private http: HttpClient) {

    }

    getConta() {
        return this.http.get<ContaCorrente>(`https://mdbankapi.rj.r.appspot.com/ContaCorrente`);
    }

    sacar(valor: number) {
        return this.http.post<ServiceResponse>(`https://mdbankapi.rj.r.appspot.com/ContaCorrente/Sacar`, parseFloat(valor.toString()));
    }

    depositar(valor: number) {
        return this.http.post<ServiceResponse>(`https://mdbankapi.rj.r.appspot.com/ContaCorrente/Depositar`, parseFloat(valor.toString()));
    }

    transferir(valor: number) {
        return this.http.post<ServiceResponse>(`https://mdbankapi.rj.r.appspot.com/ContaCorrente/Transferir`, parseFloat(valor.toString()));
    }
}