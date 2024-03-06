import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../app.person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {



  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
}); 

  constructor(
    private personService: PersonService, 
    private router: Router) {}

    onSave(): void {
      const obj = this.userForm.value;

      const index = this.personService.index;
      
      this.personService.persons[index] = new Person(
        obj.firstName,
        obj.lastName,
        obj.email,
        this.personService.currentPerson.country,
        this.personService.currentPerson.age,
        this.personService.currentPerson.creationDate,
        this.getDate()
      );  
      this.router.navigateByUrl("");
  } 

  onGoBack() {
    this.router.navigateByUrl("");
    }

  
  getDate():string {
    return new Date().toDateString();
  }
  
  }
