# rose

**实现了一些可以单独使用的js控件,为了方便使用，他们都被分开成单独的js。更新中...**
###circleBar 拖动控件 <a href="http://www.thisummer.top/children/rose/circleBar/">demo</a>
####使用
**引入javascript**
```html
<script type="text/javascript" src="js/circleBar.js"></script>
```
**调用javascript**
```javascript
    var a=new circleBar();
		a.init(box,function(px){
			h1.innerHTML=px;//这里的回调函数会在每次发生变化的时候调用，px为当前进度
		})
```
