import {short, medium , long} from "../lib/timeouts"
import {mobile , tablet , desktop} from "../lib/devices"
describe("input test", function(){

    it("give input", function(){
   // browser.url("https://www.youtube.com/")
        browser.url('https://www.google.co.in/')
        browser.pause(short)
        let linktext = $("=Gmail")
        linktext.click()
        // let search = $("//input[@id='search']")
        // search.waitForExist()
        // search.setValue('batman')
        // browser.pause(short)
        // //search.clearValue()
        // search.addValue('zzzz')
        // browser.pause(short)
        // // let clicker = $("button[id='search-icon-legacy'] yt-icon[class='style-scope ytd-searchbox']")
        // // clicker.waitForExist
        // // clicker.click()
        browser.saveScreenshot("input.png")
    })
})