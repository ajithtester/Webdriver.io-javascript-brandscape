import Base from "../Base";

class Login {

    get mailIdField(){

        return $("input[type='email']")
    }

    enterMailid(mailId){
        this.mailIdField.waitForExist()
        this.mailIdField.setValue(mailId)
        
    }

    get passwordField() {

        return $("input[type='password']")
    }

    enterPassword(password) {

        this.passwordField.waitForExist()
        this.passwordField.setValue(password)
    }

    get loginButton() {

        return $("button[type='submit']")
    }

    clickLoginButton(){

        this.loginButton.waitForExist()
        this.loginButton.click()
    }

    get dashBoard (){

         return $("//span[normalize-space()='Dashboard']")
    }

    lookForDashboard(){
        
        expect(this.dashBoard).toBePresent()
    }
}

export default new Login()