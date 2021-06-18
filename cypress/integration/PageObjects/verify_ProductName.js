
/*******
 * @author : Sangeetha Natarajan
 * @Date : Dec 2020
 * 
 */
const locators_Val = require('../../fixtures/Locators.json')
const testData_Val = require('../../fixtures/TestData.json')

class verify_ProductName
{

    //---------------------------------------------------------Launch Application URL -----------------------------------------------
    launchApp()
    {
        cy.visit(testData_Val.url)
    }

    clickSignIn()
    {
       //a[@class='nav-action-button']/span
               // # - id and . - class

    }
    //---------------------------------------------------------enterProductName -----------------------------------------------------
    enterProductName(productName)
    {

         cy.log(locators_Val.txt_SearchBox,'#### Value <<-- txt_SearchBox -->>')
         cy.get(locators_Val.txt_SearchBox)
            .clear()
            .type(productName)
         cy.get(locators_Val.btn_searchIcon).click()
         return this
     }

     //---------------------------------------------------------VerifyProductName -----------------------------------------------------
     verifyProductName(productName)
     {
        cy.get(locators_Val.lbl_productName).should('have.text',productName)
        return this
     }

     //---------------------------------------------------------selectProductinList --------------------------------------------------
     selectProductinList()
     {
      cy.xpath(locators_Val.list_ProductNames)
       //.eq(1).click()

        //-- Print All Matched Product Names
          .each(function($e1,index,$listofElements)
          {
            cy.log($e1.text())
            cy.log($listofElements.length)

            if($e1.text()=='New Apple iPhone 11 (64GB) - White')
            {
                $e1.click()
                
            }
            // if(index==2)
            // {
            //     $e1.click()
            // }
          })

     }

     
}
export default verify_ProductName