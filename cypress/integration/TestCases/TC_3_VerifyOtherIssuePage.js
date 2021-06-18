/*******
 * @author : Sangeetha Natarajan
 * @Date : Dec 2020
 * 
 */
import verify_OtherissuePage from '../PageObjects/verify_OtherissuePage'
const testData_Val = require('../../fixtures/TestData.json')

describe('TC-1 Verify the Product Name', function()
 {
   it('Should->Login into Amazon and Verify the Product Name', function()
    {
        const verifyOtherIssue = new verify_OtherissuePage()
        verifyOtherIssue.launchApp()
        verifyOtherIssue.clickOrders()
        verifyOtherIssue.ClickOnNeedHelp()
        verifyOtherIssue.verifyIssuePageTitle(testData_Val.txt_primeTitle)
       

    })
 })