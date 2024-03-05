

export class DisplayService {

    formularDisplayed = true;
    tableDisplayed = true;

    hideFormular() {
        this.formularDisplayed = false;
    }

    showFormular() {
        this.formularDisplayed = true;
    }

    hideTable() {
        this.tableDisplayed = false;
    }

    showTable() {
        this.tableDisplayed = true;
    }

    isFormularDisplayed(): boolean {
        console.log("---" + this.formularDisplayed);
        return this.formularDisplayed;
    }

    isTabelDisplayed(): boolean {
        return this.tableDisplayed;
    }

}