import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HomeComponent,MainComponentComponent],
  template:`<main>
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
  </header>
  <section class="content">
    <app-home></app-home>
    <app-main-component></app-main-component>
  </section>
</main>`,
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'homes';
}
