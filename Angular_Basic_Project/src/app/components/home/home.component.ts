import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from 'C:/Users/paulo/Documents/Workspaces/Angular_Basic_Project/Angular_Basic_Project/src/app/services/envia-formulario.service'; // Importação correta

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrigido de "styleUrl" para "styleUrls"
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name: string = "Paulo Fiuza Full-Stack Dev";
  idButton: string = "homeButton";
  listItems: string[] = ["happiness", "self-compassion", "peace", "love", "friendship"];

  submit() {
    this.enviaFormularioService.changeTitle(); // Sem parâmetro, após ajuste no serviço
  }
}

