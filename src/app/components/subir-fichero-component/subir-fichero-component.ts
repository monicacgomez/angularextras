import { Component, inject } from '@angular/core';
import { ServiceFicheros } from '../../services/service.ficheros';

@Component({
  selector: 'app-subir-fichero-component',
  standalone: false,
  styleUrl: './subir-fichero-component.css',
  templateUrl: './subir-fichero-component.html',
})

export class SubirFicheroComponent {
  private _service: ServiceFicheros =
  inject(ServiceFicheros);

  public fichero: File | null = null;
  public mensaje: string = '';
  
  seleccionarFichero(event: Event): void {
    let input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      this.fichero = input.files[0];
      this.mensaje = this.fichero.name;
    }
  }

  subirFichero(): void {
    if (this.fichero == null) {
      this.mensaje = "Selecciona un fichero";
      return;
    }

    let reader = new FileReader();
    reader.onload = async() => {
      let resultado = reader.result as string;
      let base64 = resultado.split(',')[1];

      try {
        await this._service.subirFicheroAsync(
          this.fichero!.name,
          base64
        );
      } catch (error) {
        this.mensaje = "Error al subir el fichero";
        console.log(error);
      }
    };

    reader.onerror = () => {
      this.mensaje = "Error al leer el fichero";
    };
    
    reader.readAsDataURL(this.fichero);

  }
}
