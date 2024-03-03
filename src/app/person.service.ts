import { Injectable } from "@angular/core";
import { Person } from "./app.person";

@Injectable()
export class PersonService {
    persons: Person[] = [];


    getPersons(): Person[]{
        return this.persons;
    }

    addPerson(person: Person) {
        this.persons.push(person);
    }

}