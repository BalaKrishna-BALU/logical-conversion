(function () {
	'use strict';

	function AND(a, b) {
		return ((a & b));
	}

	function OR(a, b) {
		return ((a | b));
	}

	function NOT(a) {
		var temp1 = (a >>> 0).toString(2);
		var temp2 = '';
		for (var i = 0; i < temp1.length; i++) {
			temp2 += parseInt(temp1[i]) == 1 ? 0 : 1;
		}
		return parseInt(temp2, 2);
	}

	function XOR(a, b) {
		var c = (a).toString(2);
		var d = (b).toString(2);
		var i = 0,
			result = '',
			temp = '',
			minlen = 0;
		if (c.length > d.length) {
			minlen = d.length;
			performXOR(c.split(''));
		} else if (c.length < d.length) {
			minlen = c.length;
			performXOR(d.split(''));
		} else {
			minlen = c.length;
			performXOR();
		}

		function performXOR(splitnumber) {
			for (i = 1; i <= minlen; i++) {
				result = (c[c.length - i] ^ d[d.length - i]).toString() + result;
			}
			if (splitnumber) {
				for (i = 0; i < splitnumber.length - minlen; i++) {
					temp = temp + splitnumber[i];
				}
			}
		}
		return parseInt((temp + result), 2);
	}

	function XNOR(a, b) {
		var temp = XOR(a, b);
		if (a === b) {
			var result = '';
			for (var i = 1; i < ((a).toString(2)).length; i++) {
				result += 1;
			}
			return parseInt((NOT(temp) + '' + result), 2);
		} else {
			return NOT(temp);
		}
	}

	function Conversion(number, toRadix) {
		return (number >>> 0).toString(toRadix);
	}
	var lc;
	if (typeof exports !== "undefined" && typeof module !== "undefined" && module.exports) {
		exports = module.exports = lc = {};
		exports.AND = AND;
		exports.OR = OR;
		exports.NOT = NOT;
		exports.XOR = XOR;
		exports.XNOR = XNOR;
		exports.Conversion = Conversion;
	} else {
		this.lc = {};
		this.lc.AND = AND;
		this.lc.OR = OR;
		this.lc.NOT = NOT;
		this.lc.XOR = XOR;
		this.lc.XNOR = XNOR;
		this.lc.Conversion = Conversion;
	}
}).call(this);