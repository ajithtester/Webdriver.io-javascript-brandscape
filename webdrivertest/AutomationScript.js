
import App from "./pageobject/App"
import Base from "./pageobject/Base"
import Login from "./pageobject/pages/Login"
import Logout from "./pageobject/pages/Logout"

describe("Brandscape Automation" , function(){

    it("Redirecting to Brandscape", function(){

        browser.maximizeWindow()
        App.OpenBrowser() //pageobject
        Base.pauseMedium()
        Base.screenShot("BrowserOpen.png")
    })
  
    it("Login", function(){
        
        Login.waitForMailIdField()
        Login.waitForPasswordField()

        Login.enterMailid("superadmin@yopmail.com")
        Login.enterPassword("superadmin")
    
        Login.waitForLoginButton()
        Login.clickLoginButton()

        Base.pauseLong()
        Base.screenShot("Login.png")
         })
      

     it("Check Home", function(){

         Login.lookForDashboard()
    
         Base.screenShot("HomePage.png")
        
         })
    
        
     it("Logout", function(){

         Logout.waitForProfileButton()
         Logout.ClickProfileButton()

         Logout.waitForProfileButton()
         Logout.ClickLogoutButton()

         Logout.lookForMailId()

         Base.pauseLong()
         Base.screenShot("Logout.png")

        
        })

    })
