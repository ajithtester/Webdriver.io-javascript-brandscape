import {short, medium , long} from "../lib/timeouts"
import {mobile , tablet , desktop} from "../lib/devices"
describe("is it running", function(){

//     it("test run", function(){
//   browser.url("https://www.google.com/")
//   browser.pause(short)
//   expect(browser).toHaveUrl("https://www.google.com/")
//   expect(browser).toHaveTitle("Google")
//     })

//     it("element check", function(){

//         const home = $("div[class='FPdoLc lJ9FBc'] input[name='btnK']")
//         home.waitForExist()
//         expect(home).toBeDisplayed()

//     })

    
//     it("get text", function(){

//         const page = $("div[class='FPdoLc lJ9FBc'] input[name='btnK']")
//         page.waitForExist()
//         console.log("is it getting text" + page.getText());
       

//     })

//     it("Attributes", function(){

//         browser.url("https://devexpress.github.io/testcafe/example/");
//         const submit = $("#submit-button")
//         submit.waitForExist
//         expect(submit).toHaveAttrContaining("type", "submit")
//     })

//     it("Screenshot", function(){
// browser.saveScreenshot('screenshot.png')

    //})
    it("window size", function(){
        browser.url("https://www.google.com/")
        browser.setWindowSize(1850 , 1250)
        browser.pause(long)
        browser.saveScreenshot("windowsize.png")
    })

    it ("mobile view", function(){
browser.setWindowSize(mobile[0] , mobile[1])
browser.saveScreenshot("mobile.png")

    })

    it ("tablet view", function(){
        browser.setWindowSize(tablet[0] , tablet[1])
        browser.saveScreenshot("tablet.png")
        
            })

            it ("desktop view", function(){
                browser.setWindowSize(desktop[0] , desktop[1])
                browser.saveScreenshot("desktop.png")
                
                    })
})