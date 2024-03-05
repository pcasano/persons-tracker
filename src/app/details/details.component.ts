import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  constructor(public personService: PersonService) {}

}
