exports.MainPage = class MainPage {

    constructor(page) {

        this.page = page
        this.homeButton = page.getByRole('link', { name: 'Home' })
        this.accountButton = page.getByRole('link', { name: 'Account' })
        this.clothigButton = page.getByRole('link', { name: 'Clothing' })
        this.ShoppingBagButton = page.getByRole('link', { name: 'Shopping bag' })
        this.aboutButton = page.getByRole('link', { name: 'About' })
    }

    async openFashionHub() {
        const urlVal = process.env.URL
        await page.goto(urlVal)
    }

    async goHomePage() {
        await this.homeButton.click()
    }

    async goAccountPage() {
        await this.accountButton.click()
    }

    async goClothingPage() {
        await this.clothigButton.click()
    }

    async goShoppingBagPage() {
        await this.accountButton.click()
    }

    async goAboutPage() {
        await this.ShoppingBagButton.click()
    }

}