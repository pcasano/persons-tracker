
import { Person } from "./app.person";

export class PersonService {
    persons: Person[] = [];
    currentPerson: Person;
    index:number;


    getPersons(): Person[]{
        return this.persons;
    }

    addPerson(person: Person) {
        this.persons.push(person);
    }

    deletePersonByIndex(index:any) {
        this.persons.splice(index, 1);
    }

    setCurrentPerson(i:any) {
        this.currentPerson =  this.persons[i];
    }

    setPersonIndex(i:any) {
        this.index = i;
    }

}