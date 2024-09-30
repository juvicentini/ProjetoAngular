import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})

export class HomePage {
  constructor() { }
  public gasolina: number | undefined;
  public alcool: number | undefined;
  public proporcao: number | undefined;
  public situacao: string = "";
  public porcentagem: string = "";
  calcularBestOpcao() {
    if (this.gasolina && this.alcool) {
      this.proporcao = (this.alcool / this.gasolina);
      this.porcentagem = (this.proporcao * 100 + '%');
      this.situacao = this.proporcao <= 0.7 ? 'Álcool' : 'Gasolina';
    }
  }
}