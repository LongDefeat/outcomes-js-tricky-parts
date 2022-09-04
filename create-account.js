function createAccount(pin, amount) {
  /** function which creates a bank account given a PIN number and an initial deposit amount. 
 * 
 * The return value should be an object with four methods on it:

checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)

deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)

withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)

changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”) */
  return (bankAccount = {
    checkBalance(inputPin) {
      if (inputPin !== pin) {
        return `Invalid PIN, please try again.`;
      } else {
        return `$${amount}`;
      }
    },

    deposit(inputPin, newAmount) {
      if (inputPin !== pin) {
        return `Invalid PIN, please try again.`;
      } else {
        amount += newAmount;
        return `You desposited ${newAmount} into your account for a total of ${amount}`;
      }
    },

    withdraw(inputPin, withdrawallAmount) {
      if (inputPin !== pin) return `Invalid PIN, please try again.`;
      if (withdrawallAmount > amount)
        return "Insufficient funds. Please enter a different amount.";
      amount -= withdrawallAmount;
      return `Successfully withdrew ${withdrawallAmount}. You have ${amount} remaining in account.`;
    },

    changePin(oldPin, newPin) {
      if (oldPin !== pin) return `Invalid PIN, please try again.`;
      pin = newPin;
      return `PIN successfully changed.`;
    },
  });
}

let account = createAccount("1234", 100);
console.log(account.checkBalance("oops"));
console.log(account.deposit("1234", 250));
console.log(account.withdraw("1234", 300));
console.log(account.withdraw("1234", 300));

module.exports = { createAccount };
