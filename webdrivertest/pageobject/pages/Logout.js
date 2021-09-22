import Base from "../Base"
class Logout {

    get profileButton () {
         return $(".btn.btn-white.fs12.dropdown-toggle")
    }

    waitForProfileButton (){

        this.profileButton.waitForExist()
    }

    ClickProfileButton () {

        this.profileButton.click()

    }

    get logoutButton () {
        return $("//a[normalize-space()='Logout']")
   }

   waitForLogoutButton(){

    this.logoutButton.waitForExist()
}

   ClickLogoutButton () {

    this.logoutButton.click()

}

    get loginPage () {
     return $("//div[1]/form[1]/div[1]/input[1]")
}

    lookForMailId(){
      expect(this.loginPage).toBePresent()
}

}

export default new Logout()