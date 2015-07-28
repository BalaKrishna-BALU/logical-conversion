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
	XOR:function(a,b){
		var c = (a >>> 0).toString(2);
		var d = (b >>> 0).toString(2);
        var i=0,result='',temp='',minlen=0;
        if(c.length>d.length){
            minlen = d.length;
            for(i=1;i<=minlen;i++){
                result=(c[c.length-i]^d[d.length-i]).toString()+result;
            }
            c=c.split('');
            for(var j=0;j<c.length-minlen;j++){
                temp=temp+c[j];
            }
        }else if(c.length<d.length){
            minlen = c.length;
            for(i=1;i<=minlen;i++){
                result=(c[c.length-i]^d[d.length-i]).toString()+result;
            }
            d=d.split('');
            for(var j=0;j<d.length-minlen;j++){
                temp=temp+d[j];
            }
        }else{
            minlen = c.length;
            for(i=1;i<=minlen;i++){
                result=(c[c.length-i]^d[d.length-i]).toString()+result;
            }
        }
        return temp+result;
	},
	Conversion : function(number, toRadix) {
		return (number >>> 0).toString(toRadix);
	}
}
