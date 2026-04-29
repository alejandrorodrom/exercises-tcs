import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background: #f5f7fb;
      color: #111827;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    }
  `]
})
export class AppComponent {}
