import { t, Selector } from "testcafe";

class Inventory{
    public title: Selector;
    public sauceLabsBackpack: Selector;
    public sauceLabsOnesie: Selector;
    public cart: Selector;
    public noOfItems: Selector;

    constructor() {
        this.title = Selector('.app_logo');
        this.sauceLabsBackpack = Selector('#add-to-cart-sauce-labs-backpack');
        this.sauceLabsOnesie = Selector('#add-to-cart-sauce-labs-onesie');
        this.cart = Selector('#shopping_cart_container > a');
        this.noOfItems = Selector('#shopping_cart_container');
    }

    public async verifyTitle(): Promise<void> {
        await t.expect(this.title.textContent).eql('Swag Labs');
    }

    public async verifyPriceOfTheJacket(): Promise<void> {
        await t.expect(Selector('.inventory_item_price').withText('$49.99').exists).ok();
    }

    public async verifyTheItemCount(): Promise<void> {
        await t.expect(this.noOfItems.textContent).eql('2');
    }

}
export default new Inventory();



