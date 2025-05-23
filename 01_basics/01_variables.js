const accountId = 144553 // Values cannot be changed
let accountEmail = "subhrajit@google.com" // Always use this
var accountPassword = "1234" // Dont use this . Problem in block and functional scope
accountCity = "Kolkata" // This also works but not a good practice
let accountState; // Treated as undefined

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])