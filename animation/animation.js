	function animation(times,fn,from,to){
		var g=to-from;
		var kop=to;
		var everyScrond=g/((times/1000)*60);
		function factory(){
			if(everyScrond>0){
				return function(a,b){
					return Math.min(a,b)
				}
			}else{
				return function(a,b){
					return Math.max(a,b)
				}
			}
		}
		var jow=factory();
		var now=from;
		var time=setInterval(function(){
			now+=everyScrond;
			fn(jow(now,g))
		},1000/60)
		setTimeout(function(){
			clearInterval(time);
			if(everyScrond>0){
				if(now<g){
					fn(g)
				}	
			}else{
				if(now>g){
					fn(kop)
				}
			}
			
		},times)
	}
