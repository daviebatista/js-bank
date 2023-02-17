const Account = require("./Account")

module.exports = class User{
  constructor(email, fullName){
    this.fullName = fullName
    this.email = email
    this.account = new Account(this)
  }
}
