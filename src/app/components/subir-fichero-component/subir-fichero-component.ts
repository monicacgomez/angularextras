import { Component } from '@angular/core';

@Component({
  selector: 'app-subir-fichero-component',
  standalone: false,
  styleUrl: './subir-fichero-component.css',
  templateUrl: './subir-fichero-component.html',
})

export class SubirFicheroComponent {
  public fichero: File | null = null;
  public mensaje: string = '';
  
  seleccionarFichero(event: Event): void {
    let input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      this.fichero = input.files[0];
      this.mensaje = this.fichero.name;
    }
  }
}
