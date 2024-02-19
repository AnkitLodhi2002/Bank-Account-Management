function BankAccount(accountNumber, name, type, balance){
    this.accountNumber =accountNumber
    this.name = name
    this.type == type
    this.balance = balance

    this.deposit = function(amount){
        this.balance+=amount
        console.log("Depodited :" + amount)
        console.log("Updated Balance:" + this.balance)
    }
    this.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -+ amount
            console.log("Availabel Balance:" + this.balance)
        }else {
            console.log("Insufficent Balance");
        }
    }
    this.checkBalance = function(){
        console.log("The account balance is:" + this.balance)
    }
    this.isActive = function(){
        if(this.balance<=0){
            console.log("The account is Inactive")
        }else{
            console.log("The account is active")
        }
    }
}


let account1 = new BankAccount(1234, "John Doe", "Savings", 5000)
console.log(account1)

let account2 = new BankAccount(5678, "Babu Bhai", "Savings", 4000)
console.log(account2)

account1.checkBalance()
account1.isActive()
account1.withdraw()

