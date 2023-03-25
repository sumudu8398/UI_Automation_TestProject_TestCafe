import { t, Selector } from "testcafe";

class Checkout{
    public fname: Selector;
    public lastName: Selector;
    public zip: Selector;
    public submit: Selector;

    constructor() {
        this.fname = Selector('input').withAttribute('data-test','firstName');
        this.lastName = Selector('input').withAttribute('data-test','lastName');
        this.zip = Selector('input').withAttribute('data-test','postalCode');
        this.submit = Selector('[data-test="continue"]');
    }

    public async typeFirstName(firstName: string): Promise<void> {
        await t.typeText(this.fname, firstName);
    }

    public async typeLastName(lName: string): Promise<void> {
        await t.typeText(this.lastName, lName);
    }

    public async typePostalCode(zipCode: string): Promise<void> {
        await t.typeText(this.zip, zipCode);
    }

}
export default new Checkout();



