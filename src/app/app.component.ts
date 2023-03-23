import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';

}
/*
toggleOrdinamento() {
  if (this.ordinamento === 'velocità') {
    this.veicoli.sort((a, b) => b.prezzo - a.prezzo);
    this.ordinamento = 'prezzo';
  } else {
    this.veicoli.sort((a, b) => b.velocitamax - a.velocitamax);
    this.ordinamento = 'velocità';
  }
}
*/