import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../app.person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [PersonService]
})
export class TableComponent {

  constructor(private personService: PersonService) {

  }

  persons: Person[] = [];


  ngOnInit() {
    this.persons = this.personService.getPersons();
    console.log("-" + this.personService.getPersons());
  }
}
