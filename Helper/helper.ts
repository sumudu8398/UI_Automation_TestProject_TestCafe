import { t, Selector } from "testcafe";

class Helper{

    public async scrollDown(): Promise<void> {
        await t.eval(() => window.scrollBy(0, window.innerHeight));
    }

    public async clickItem(item: SelectorPromise): Promise<void> {
        await t.click(item);
    }

    public async scrollUp(): Promise<void> {
        await t.eval(() => window.scrollBy(0, -window.innerHeight));
    }

}

export default new Helper();


