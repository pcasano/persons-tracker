import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { DisplayService } from '../display.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

  constructor(
    public personService: PersonService,
    public displayService: DisplayService,
    private router: Router) {

  }


  onDelete(i:any) {
    this.personService.deletePersonByIndex(i);
  }

  onDetails(i:any) {
    this.displayService.hideFormular();
    this.displayService.hideTable();
    this.personService.setCurrentPerson(i);

    this.router.navigateByUrl("/details");


  }



}
