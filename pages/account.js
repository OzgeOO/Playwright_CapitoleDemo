exports.AccountPage = class AccountPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByPlaceholder('Username')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.logout_button = page.getByRole('button', { name: 'Logout' })
    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    async verifyLogoutButtonVisible() {
        await expect(page.getByRole('button', { name: 'Logout' }).toBeVisible());
    }
 

}