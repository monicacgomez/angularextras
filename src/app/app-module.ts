import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirFicheroComponent } from './components/subir-fichero-component/subir-fichero-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceFicheros } from './services/service.ficheros';

@NgModule({
  declarations: [App, SubirFicheroComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceFicheros,
  ],
  bootstrap: [App],
})
export class AppModule {}
