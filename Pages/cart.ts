import { t, Selector } from "testcafe";
class Cart{
    public item1: Selector;
    public item2: Selector;
    public button: Selector;

    constructor() {
        this.item1 = Selector('.inventory_item_name').nth(0);
        this.item2 = Selector('.inventory_item_name').nth(1);
        this.button = Selector('button').withAttribute('data-test', 'checkout');

    }

    public async verifyItemsInTheCart(): Promise<void> {
        await t.expect(this.item1.textContent).eql('Sauce Labs Backpack');
        await t.expect(this.item2.textContent).eql('Sauce Labs Onesie');
    }

}
export default new Cart();




