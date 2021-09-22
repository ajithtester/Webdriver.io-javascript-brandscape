class Base {

pauseShort (){
browser.pause(3000)
}

pauseMedium (){
    browser.pause(6000)
}

pauseLong (){
    browser.pause(9000)
}

screenShot (fileName) {
this.fileName = fileName
    browser.saveScreenshot(fileName)

}

}

export default new Base()