import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../app.person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

  constructor(public personService: PersonService) {

  }


  onDelete(i:any) {
    this.personService.deletePersonByIndex(i);

  }



}
