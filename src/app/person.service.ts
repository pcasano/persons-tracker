import { Injectable } from "@angular/core";
import { Person } from "./app.person";

export class PersonService {
    persons: Person[] = [];


    getPersons(): Person[]{
        return this.persons;
    }

    addPerson(person: Person) {
        this.persons.push(person);
    }

    deletePersonByIndex(index:any) {
        this.persons.splice(index, 1);
    }

}