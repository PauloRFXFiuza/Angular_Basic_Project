import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  showTitle: boolean = false;
  
  changeTitle() {
    console.log("Title changed!");
    this.showTitle = true;
  }
  
}
