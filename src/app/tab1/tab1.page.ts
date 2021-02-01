import { Component, OnInit } from '@angular/core';
import { ContaCorrente } from '../Entities/ContaCorrente';
import { ContaCorrenteService } from '../services/conta-corrente/conta-corrente.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  contaCorrente: ContaCorrente;
  valor: number;
  mostrarOpcaoSacar = false;
  mostrarOpcaoDepositar = false;
  mostrarOpcaoTransferir = false;
  loading = true;  

  constructor(private contaCorrenteService: ContaCorrenteService) {}

  ngOnInit(): void {
    this.contaCorrenteService.getConta().subscribe(x => {
      this.contaCorrente = x;
      this.loading = false;
    });
  }

  mudarOpcaoTransacao(opcao: string) {
    if(opcao == 'sacar') {
      this.mostrarOpcaoDepositar = false;
      this.mostrarOpcaoTransferir = false;
      this.mostrarOpcaoSacar = !this.mostrarOpcaoSacar;
    } else if(opcao == 'depositar') {
      this.mostrarOpcaoTransferir = false;
      this.mostrarOpcaoSacar = false;
      this.mostrarOpcaoDepositar = !this.mostrarOpcaoDepositar;
    } else if(opcao == 'transferir') {
      this.mostrarOpcaoDepositar = false;
      this.mostrarOpcaoSacar = false;
      this.mostrarOpcaoTransferir = !this.mostrarOpcaoTransferir;
    }
  }

  sacar() {
    this.loading = true;
    this.contaCorrenteService.sacar(this.valor).subscribe(x => {
      this.contaCorrente = x.data;
      this.loading = false;
    });
  }

  depositar() {
    this.loading = true;
    this.contaCorrenteService.depositar(this.valor).subscribe(x => {
      this.contaCorrente = x.data;
      this.loading = false;
    });
  }
  
  transferir() {
    this.loading = true;
    this.contaCorrenteService.transferir(this.valor).subscribe(x => {
      console.log(x);
      
      this.contaCorrente = x.data;
      this.loading = false;
    }, (err) => console.log(err));
  }

}
