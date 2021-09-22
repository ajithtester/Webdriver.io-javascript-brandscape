import Base from "../Base";

class Login {

    get mailIdField(){

        return $("input[type='email']")
    }

    waitForMailIdField(){

        this.mailIdField.waitForExist()
    }

    enterMailid(mailId){
        this.mailIdField.setValue(mailId)
    }

    get passwordField() {

        return $("input[type='password']")
    }

    waitForPasswordField(){

        this.passwordField.waitForExist()
    }

    enterPassword(password) {

        this.passwordField.setValue(password)
    }

    get loginButton() {

        return $("button[type='submit']")
    }

    waitForLoginButton () {

        this.loginButton.waitForExist()

    }

    clickLoginButton(){

        this.loginButton.click()
    }
}

export default new Login()