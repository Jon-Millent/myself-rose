(function(root){


	function Factory(){
		this.mainLine = [];
		this.now = 0;
	}
	Factory.prototype.add=function(times,doit){
		this.mainLine.push({
			time : times,
			fn : doit
		})
	}
	Factory.prototype.start=function(){
		 this.mainLine.sort(function(a,b){
			return a.time - b.time;
		})
		 this.next();
	}
	Factory.prototype.next=function(){
		var nows = this.mainLine[this.now];
		var self = this;
		setTimeout(function(){
			nows.fn();
			if(self.now  >= self.mainLine.length-1){
				console.log('end')
			}else{
				self.now++;
				self.next();
			}
		},nows.time)
	}
	root.Timer = Factory;

})(window)
