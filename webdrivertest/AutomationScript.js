
import App from "./pageobject/App"
import Base from "./pageobject/Base"
import Login from "./pageobject/pages/Login"

describe("Brandscape Automation" , function(){

    it("Redirecting to Brandscape", function(){

        browser.maximizeWindow()
        App.OpenBrowser() //pageobject
        Base.pauseMedium()
        Base.screenShot("Test.png")
    })
  
    it("Login", function(){
        
        Login.waitForMailIdField()
        Login.waitForPasswordField()

        Login.enterMailid("superadmin@yopmail.com")
        Login.enterPassword("superadmin")
    
        Login.waitForLoginButton()
        Login.clickLoginButton()

        Base.pauseLong()
    //     })
      

    // it("Check Home", function(){

    //     let home = $("//span[contains(text(),'Dashboard')]")
    //     expect(home).toBePresent()
    //     browser.saveScreenshot("HomePage.png")
        
    //     })
    
        
    // it("Logout", function(){
    //     let profile = $(".btn.btn-white.fs12.dropdown-toggle")
    //     profile.waitForExist()
    //     profile.click()
    
    //     let logout = $("//a[normalize-space()='Logout']")
    //     logout.waitForExist()
    //     logout.click()
    
    //     let loginemail = $("//div[1]/form[1]/div[1]/input[1]")
    //     expect(loginemail).toBePresent()
        
        })

    })
