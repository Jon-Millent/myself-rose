#一个模拟滚动条的插件雏形

**使用**
```
window.onload=function(){
	var scroll = document.getElementById('scrollbar');
	var a = new scrollbar(scroll);
	scroll.onclick=function(){ //当每次有元素添加到该div时候，请调用这个render()方法来更新视图
		var h1 = document.createElement('h1');
		h1.innerHTML='aaaa';
		this.appendChild(h1)
		a.render();
	}

}
```
