import { t, Selector } from "testcafe";

class Logging{
    public usernameInput: Selector;
    public passwordInput: Selector;
    public submitButton: Selector;
    public userName: string;
    public password: string;

    constructor() {
        this.usernameInput = Selector('input').withAttribute('data-test','username');
        this.passwordInput = Selector('input').withAttribute('data-test','password');
        this.submitButton = Selector('[data-test="login-button"]');
        this.userName = 'performance_glitch_user';
        this.password = 'secret_sauce';
    }

    public async typeUsername(): Promise<void> {
        await t.typeText(this.usernameInput, this.userName);
    }

    public async typePassword(): Promise<void> {
        await t.typeText(this.passwordInput, this.password);
    }

    public async clickSubmit(): Promise<void> {
        await t.click(this.submitButton);
    }


}

export default new Logging();
