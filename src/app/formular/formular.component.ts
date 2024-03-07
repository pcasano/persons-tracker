import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../app.person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.css',
})
export class FormularComponent {


  @Output()newItemEvent = new EventEmitter<Person[]>();
  

  persons: Person[] = [];
  
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl('')
}); 

  constructor(private personService:PersonService) {

  }


onFormSubmit(): void {
  const obj = this.userForm.value;
  this.personService.addPerson(new Person(
    obj.firstName,
    obj.lastName,
    obj.email,
    obj.country,
    obj.firstName,
    this.getDate(),
    "-"
  ));

  this.userForm.reset();
} 

getDate():string {
  return new Date().toDateString();
}

}
