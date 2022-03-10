import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  public herows       : string[] = ['Pantera','Spiderman','Ironman','Superman','Thor'];
  public heroeBorrado : string   = '';
  borrarItem(){
    console.log("borrado");
    this.heroeBorrado = this.herows.shift() || '';
    console.log(this.heroeBorrado);
  }

}
