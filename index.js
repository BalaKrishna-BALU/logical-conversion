module.exports = {
	AND : function(a, b) {
		return ((a & b));
	},
	OR : function(a, b) {
		return ((a | b));
	},
	NOT:function(a){
		var temp1 = (a >>> 0).toString(2);
		var temp2='';
		for(var i=0;i<temp1.length;i++){
      		temp2+=parseInt(temp1[i])==1?0:1;
		}
		return parseInt(temp2);
	},
	Conversion : function(number, toRadix) {
		return (number >>> 0).toString(toRadix);
	}
}
