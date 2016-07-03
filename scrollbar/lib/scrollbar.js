(function(){
	function Factory(node,opa){
		this.node=node;
		this.newScroll=null;
		this.bulibili=1;
		this.init();
	};
	Factory.prototype.init=function(){
		
		this.config();
		this.render();
		this.addEvent()
	};
	Factory.prototype.config=function(){
		var scroll = document.createElement('div');
		var shortPx= this.node.offsetWidth - this.node.clientWidth;
		this.newScroll= document.createElement('div');
		this.newScroll.className='newScroll';
		this.newScroll.appendChild(document.createElement('span'));
		scroll.style.width = this.node.offsetWidth+'px';
		scroll.className = 'scrollbar';
		this.lastHeight = this.node.scrollHeight - this.node.clientHeight
		scroll.style.height = this.newScroll.style.height =  this.node.offsetHeight+'px';
		this.node.parentNode.insertBefore(scroll,this.node)
		this.node.style.paddingRight = shortPx+'px';
		scroll.style.overflow='hidden';
		scroll.appendChild(this.node);
		scroll.appendChild(this.newScroll);
	};
	Factory.prototype.on=function(node,type,fn){
		node.lib=node.lib||{};
		node.lib[type]=node.lib[type]||[];
		node.lib[type].push(fn)
		if(node.addEventListener){
			node.addEventListener(type,fn,false)
		}else{
			var tuo=function(){
				fn.call(node)
			}
			node.lib[type].push(tuo)
			node.attachEvent('on'+type,tuo);
		}
	};
	Factory.prototype.off=function(node,type){
		try{
			if(node.removeEventListener){
				for(var i=0;i<node.lib[type].length;i++){
					node.removeEventListener(type,node.lib[type][i],false);
				}
				node.lib[type]=[];
			}else{
				for(var i=0;i<node.lib[type].length;i++){
					node.detachEvent('on'+type,node.lib[type][i]);
				}
				node.lib[type]=[];
				
			}	
		}catch(e){

		}
		
	};
	Factory.prototype.render=function(){
		this.off(this.node,'scroll');
		var tSpan = this.newScroll.children[0];
		var chae = this.node.scrollHeight - this.node.clientHeight ;	
		var ols = false;
		this.bulibili = 0;

		if(chae > this.node.clientHeight - 50){

			tSpan.style.height='50px'
			ols=true;
			this.bulibili = (   (this.node.clientHeight - 50) / chae  ) ;

		}else{
			tSpan.style.height=this.node.clientHeight - chae +'px';
			ols=false;
		}
		var self= this;
		this.on(this.node,'scroll',function(e){
			var ev = e || window.event;
			if(ols){
				tSpan.style.top=(self.node.scrollTop*self.bulibili)+'px';

			}else{
				tSpan.style.top=self.node.scrollTop+'px';
			}
		})
	};
	Factory.prototype.addEvent=function(){
		var tSpan = this.newScroll.children[0];
		var self = this;
		this.on(tSpan,'mousedown',function(e){
			var ev = e || window .event; 
			var y=ev.pageY - tSpan.offsetTop;
			self.on(document,'mousemove',function(e){
				var ev = e || window .event; 
				var ogg = ev.pageY - y ;

				if(ogg<=0){
					ogg=0;
				}else if(ogg >= self.newScroll.clientHeight - tSpan.offsetHeight){
					ogg = self.newScroll.clientHeight - tSpan.offsetHeight
				}
				tSpan.style.top = ogg +'px';
				self.node.scrollTop = ogg ;
				ev.preventDefault()
				ev.stopPropagation()
			})
			self.on(document,'mouseup',function(e){
				self.off(document,'mousemove');
				self.off(document,'mouseup');
			})
		})
	}
	window.scrollbar = Factory;
})()
