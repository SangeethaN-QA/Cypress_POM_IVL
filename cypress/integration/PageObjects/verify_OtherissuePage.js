const locators_Val = require('../../fixtures/Locators.json')
const testData_Val = require('../../fixtures/TestData.json')

class verify_OtherissuePage
{

    launchApp()
    {
        cy.visit(testData_Val.url)
    }

    clickOrders()
    {
        cy.get(locators_Val.lnk_Orders).click()
    }

    ClickOnNeedHelp()
    {
        cy.xpath(locators_Val.lnk_needHelp).click()  
        cy.xpath(locators_Val.lnk_otherIssues).click() 
    }

    verifyIssuePageTitle(issuePageTitle)
    {
        cy.xpath(locators_Val.txt_issueTitle).should('have.text',issuePageTitle)
    }
    // verifyPrimeTitle(primeTitle)
    // {
    //     cy.title().should('eq',primeTitle)
    // }



}
export default verify_OtherissuePage