import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Certifique-se de que o seletor é 'app-root'
  templateUrl: './app.component.html', // Verifique se o caminho está correto
  styleUrls: ['./app.component.css'] // Se você tiver estilos
})
export class AppComponent {
  title = 'seu-app'; // Adicione uma propriedade, se necessário
}
