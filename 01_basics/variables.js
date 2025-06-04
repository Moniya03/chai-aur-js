// const cannot be reassigned
const accountId = 1445;

let accountEmail = "moniya@gmail.com";

// avoid using var (function scoped, not block scoped)
var accountPassword = "1234";

// implicitly declared global variable (bad practice)
accountCity = "Jaipur";

// updating values
accountEmail = "abc@gmail.com";
accountPassword = "2435";
accountCity = "delhi";

console.log(accountId);

// outputs all variables in a tabular format
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Notes:
- Prefer 'let' and 'const'; avoid 'var' to prevent scope-related issues.
- Do not declare variables without let/const/var (leads to globals).
- Never store or display passwords like this in real applications.
*/
