import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './global/routers/routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

/**
 * Modulo responsavel pelo controle do app principal
 * @author Lucas Alexandre
 * @date 26/12/2023 - 19:12:29
 * @version 2.0.0
 * @export
 * @class AppModule
 * @typedef {AppModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 19:04:53
 * @author Lucas Alexandre
*/
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
