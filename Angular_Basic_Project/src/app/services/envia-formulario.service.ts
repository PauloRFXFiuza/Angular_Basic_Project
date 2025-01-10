import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  showTitle: boolean = false;
  
  submit(event: any){
    console.log(event)
    this.showTitle = true;
  }
}
