# logical-conversion
Truth table implementation of given numbers

## Usage

```javascript

//include the logical-conversion
var lc = require("./index");

// AND operation -- Performs truth table Conjunction operation on given decimal numbers.
lc.AND(2, 3); // output -- 2

// OR operation -- Performs truth table Disjunction operation on given decimal numbers.
lc.OR(2, 3); // output -- 3

// NOT operation -- Performs truth table Negation operation on given decimal number.
lc.NOT(8); // output -- 111

// Conversion -- Converts the given decimal number into perferred radix form.
lc.Conversion(3, 2); // output -- 11  

```
## Test

```bash
$ git clone https://github.com/BalaKrishna-BALU/total-captcha.git
$ cd logical-conversion
$ cd test
$ node test.js
```

## License

MIT
