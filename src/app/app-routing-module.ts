import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirFicheroComponent } from './components/subir-fichero-component/subir-fichero-component';

const routes: Routes = [
  {
    path: '',
    component: SubirFicheroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
