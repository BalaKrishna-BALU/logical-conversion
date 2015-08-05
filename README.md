# logical-conversion
Truth table implementation of given decimal number's.

## Installation

```bash
$ npm install logical-conversion
```

## Usage

```javascript

//include the logical-conversion
var lc = require("logical-conversion");

// AND operation -- Performs truth table Conjunction operation on given decimal numbers.
lc.AND(2, 3); // output -- 2 in decimal format.

// OR operation -- Performs truth table Disjunction operation on given decimal numbers.
lc.OR(2, 3); // output -- 3 in decimal format.

// NOT operation -- Performs truth table Negation operation on given decimal number.
lc.NOT(8); // output -- 7 in decimal format. 

// XOR -- Performs truth table Xor operation on given decimal numbers.
lc.XOR(7,16); // output -- 23 in decimal format. 

// Conversion -- Converts the given decimal number into perferred radix form.
lc.Conversion(15, 2); // output -- 1111  in binary format.

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
