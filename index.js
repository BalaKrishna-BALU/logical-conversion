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
		return parseInt(temp2,2);
	},
	XOR:function(a,b){
		var c = (a).toString(2);
		var d = (b).toString(2);
        var i=0,result='',temp='',minlen=0;
        
        if(c.length>d.length){
            minlen = d.length;
            performXOR(c.split(''));
        }else if(c.length<d.length){
            minlen = c.length;
            performXOR(d.split(''));
        }else{
            minlen = c.length;
            performXOR();
        }

        function performXOR(splitnumber){
             for(i=1;i<=minlen;i++){
                result=(c[c.length-i]^d[d.length-i]).toString()+result;
            }
            if(splitnumber){
                for(i=0;i<splitnumber.length-minlen;i++){
                    temp=temp+splitnumber[i];
                }
            }
        }
        return parseInt((temp+result),2);
	},
	Conversion : function(number, toRadix) {
		return (number >>> 0).toString(toRadix);
	}
}
