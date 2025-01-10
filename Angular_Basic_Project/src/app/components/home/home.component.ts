import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  name: string = "Paulo Fiuza Full-Stack Dev";
  idButton: string = "homeButton";
  showTitle: boolean = false;

  submit(event: any){
    console.log(event)
    this.showTitle = true;
  }
}
