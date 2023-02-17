const App = require("./App")

App.createUser("davi@email.com", "Davi")
App.createUser("cherdon@email.com", "Cherdon")
App.createUser("benzo@email.com", "Benzo")

App.deposit("davi@email.com", 100)

App.transfer("davi@email.com", "cherdon@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("benzo@email.com", 2000, 24)

console.log(App.findUser("davi@email.com"))
console.log(App.findUser("davi@email.com").account)
console.log(App.findUser("cherdon@email.com"))
console.log(App.findUser("cherdon@email.com").account)
console.log(App.findUser("benzo@email.com"))
console.log(App.findUser("benzo@email.com").account.loans[0].installments)