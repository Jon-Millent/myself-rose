# rose

**实现了一些可以单独使用的js控件,为了方便使用，他们都被分开成单独的js。更新中...**
###circleBar 拖动进度控【支持ie6+】 <a href="http://www.thisummer.top/children/rose/circleBar/">demo</a>
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
		
		a.moveTo(99);//将进度移动到99%
		
		a.disabled();//禁用拖动控件
		
		a.undisabled();//启用拖动控件
```
###circleBar 日历控件【支持ie7+】 <a href="http://www.thisummer.top/children/rose/Rili/">demo</a>
**引入javascript**
```html
<script type="text/javascript" src="js/rose.rili.js"></script>
```
**调用javascript**
```javascript
    var a = new Rili(document.getElementById('box'),{
		from:'1800',//开始日期，解释为1800-01-01
		to:'2016',//最大到的日期，解释为2016-现在的月-今天日期
		noChangeValue:false,//是否允许控件点击更改input value值，默认为false(false是允许)
		afterClick:function(date){//当点击日期时调用，参数data[Array]，是用户点击的日期
			//some在这里你可以自定义value的要显示日期的格式
		}
	});
```
