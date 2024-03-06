import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  constructor(
    public personService: PersonService,
    private router: Router) {}

  goBack() {
    this.router.navigateByUrl("");
  }


}
