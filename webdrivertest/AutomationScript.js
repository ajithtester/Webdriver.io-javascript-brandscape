import {short, medium , long} from "../lib/timeouts"
import {mobile , tablet , desktop} from "../lib/devices"
describe("Brandscape Automation" , function(){

    it("Redirecting to Brandscape", function(){

        browser.maximizeWindow()
        browser.url('https://devops-test.d2xm4odj59p3vm.amplifyapp.com/login')
        browser.pause(short)
        browser.saveScreenshot("LoginPage.png")
    })
  
    it("Login", function(){

        let emailId = $("//div[1]/form[1]/div[1]/input[1]")
        emailId.waitForExist()
        emailId.setValue("superadmin@yopmail.com")

        let passWord = $("//div[2]/div[1]/input[1]")
        passWord.waitForExist()
        passWord.setValue("superadmin")

        let loginButton = $("button[type='submit']")
        loginButton.waitForExist()
        loginButton.click()

        browser.pause(long)
        })
      

    it("Check Home", function(){

        let home = $("//span[contains(text(),'Dashboard')]")
        expect(home).toBePresent()
        browser.saveScreenshot("HomePage.png")
        
        })
    
        
    it("", function(){
        let profile = $(".btn.btn-white.fs12.dropdown-toggle")
        profile.waitForExist()
        profile.click()
    
        let logout = $("//a[normalize-space()='Logout']")
        logout.waitForExist()
        logout.click()
    
        let loginemail = $("//div[1]/form[1]/div[1]/input[1]")
        expect(loginemail).toBePresent()
        
        })

    })
