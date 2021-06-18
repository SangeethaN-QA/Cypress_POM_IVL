/*******
 * @author : Sangeetha Natarajan
 * @Date : Dec 2020
 * 
 */
import verify_ProductName from '../PageObjects/verify_ProductName'
const testData_Val = require('../../fixtures/TestData.json')

describe('TC-1 Verify the Product Name', function()
 {
   it('Should->Login into Amazon and Verify the Product Name', function()
    {
        const verifyProd = new verify_ProductName()
        verifyProd.launchApp()
        verifyProd.enterProductName(testData_Val.productName)
        verifyProd.verifyProductName(testData_Val.ver_productName)
        verifyProd.selectProductinList()

    })
 })