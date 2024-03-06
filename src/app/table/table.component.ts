import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

  constructor(
    public personService: PersonService,
    private router: Router) {

  }


  onDelete(i:any) {
    this.personService.deletePersonByIndex(i);
  }

  onDetails(i:any) {
    this.personService.setCurrentPerson(i);
    this.router.navigateByUrl("/details");
  }

  onEdit(i:any) {
    this.personService.setPersonIndex(i); 
    this.router.navigateByUrl("/edit");
  }



}
