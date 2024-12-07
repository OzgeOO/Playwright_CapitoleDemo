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
      
        const urlVal = process.env.URL
        await page.goto(urlVal + '/about.html')
        console.log(logs)
        console.log(errors)
        expect(errors.length).toBe(0)
    }

}