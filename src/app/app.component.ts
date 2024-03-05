import { Component } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public displayService: DisplayService) {

  }

  title = 'persons-tracker';
}
