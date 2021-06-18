
const testData_Val = require('../../fixtures/TestData.json')
const locators_Val = require('../../fixtures/Locators.json')

class verify_InvalidLoginInfo
{

    launchApp()
    {
        cy.visit(testData_Val.url)
    }

    clickOrders()
    {
        cy.get(locators_Val.lnk_Orders).click()
    }

    enterInvalidLoginInfo(email,password)
    {
        cy.get(locators_Val.txt_Email).type(testData_Val.txtEmailData)
        cy.get(locators_Val.btn_Continue).click()
        cy.get(locators_Val.txt_Password).type(testData_Val.txtPasswordData)
        cy.get(locators_Val.btn_SignIn).click()
        return this

    }
    verify_InvalidLoginError(loginErrorMsg)
    {
       cy.xpath(locators_Val.msg_SignInError).should('have.text',loginErrorMsg)
       return this
    }
}

export default verify_InvalidLoginInfo