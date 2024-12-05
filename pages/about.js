exports.AboutPage = class AboutPage {

    constructor(page) {

        this.page = page
    }

    async verifyConsoleError() {
        const logs = []
        const errors = []
        page.on("console", (message) => {
          logs.push({message, type: message.type() })
      })
      
        page.on("pageerror", (exception) => {
            errors.push({exception })
        })
      
        await page.goto('https://pocketaces2.github.io/fashionhub/about.html')
      
        console.log(logs)
        console.log(errors)
        expect(errors.length).toBe(0)
    }

}