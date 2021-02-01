import { AfterViewInit, Component } from '@angular/core';
import { ContaPoupanca } from '../Entities/ContaPoupanca';
import { ContaPoupancaService } from '../services/conta-poupanca/conta-poupanca.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {

  contaPoupanca: ContaPoupanca;
  valor: number;
  mostrarOpcaoSacar = false;
  mostrarOpcaoDepositar = false;
  mostrarOpcaoTransferir = false;
  loading = false;

  constructor(private contaPoupancaService: ContaPoupancaService) {}

  ngAfterViewInit(): void {
    this.contaPoupancaService.getConta().subscribe(x => {
      this.contaPoupanca = x;
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
    this.contaPoupancaService.sacar(this.valor).subscribe(x => {
      this.contaPoupanca = x.data;
      this.loading = false;
    });
  }

  depositar() {
    this.loading = true;
    this.contaPoupancaService.depositar(this.valor).subscribe(x => {
      this.contaPoupanca = x.data;
      this.loading = false;
    });
  }
  
  transferir() {
    this.loading = true;
    this.contaPoupancaService.transferir(this.valor).subscribe(x => {
      console.log(x);
      
      this.contaPoupanca = x.data;
      this.loading = false;
    }, (err) => console.log(err));
  }

}
