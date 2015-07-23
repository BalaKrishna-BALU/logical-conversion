module.exports = {
	AND : function(a, b) {
		return ((a & b));
	},
	OR : function(a, b) {
		return ((a | b));
	},
	Conversion : function(number, toRadix) {
		return (number >>> 0).toString(toRadix);
	}
}
