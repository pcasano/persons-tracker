import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../app.person';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.css'
})
export class FormularComponent {


  persons: Person[] = [];
  
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl('')
}); 



onFormSubmit(): void {
  const obj = this.userForm.value;

  this.persons.push(new Person(
    obj.firstName,
    obj.lastName,
    obj.email,
    obj.country,
    obj.firstName,
  ))

  console.log(this.persons);

} 

}
