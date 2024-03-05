import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { DisplayService } from '../display.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  constructor(
    public personService: PersonService,
    public displayService: DisplayService,
    private router: Router) {}

  goBack() {
    this.displayService.showFormular();
    this.displayService.showTable();
    this.router.navigateByUrl("");
  }


}
