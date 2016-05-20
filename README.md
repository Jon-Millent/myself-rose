# rose

**实现了一些可以单独使用的js控件,为了方便使用，他们都被分开成单独的js。更新中...**
###>>>>>>>circleBar 拖动进度控【支持ie6+】 <a href="http://www.thisummer.top/children/rose/circleBar/">demo</a>
####使用
**引入javascript**
```html
<script type="text/javascript" src="js/circleBar.js"></script>
```
**引入css**
```html
<link rel="stylesheet" type="text/css" href="css/main.css">
```
**默认样式**
```css
#box{
	width: 700px;
	height: 4px;
	background-color: #000;
	margin: 100px auto;
	position: relative;
}
#box .circle{
	width: 20px;
	height: 20px;
	border:1px solid #52524D;
	background-color: #EAEDE0;
	position: absolute;
	left: 0;
	top: -8px;
	border-radius: 50%;
	cursor: pointer;
}
.show{
	text-align: center;
	font-size: 100px;
	color: #333;
	font-family: "微软雅黑";
	font-weight: normal;
}
.some{
	color: #52CBAD;
	font-size: 50px;
}
.test{
	width:400px;
	margin: 0 auto;
}
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
###>>>>>>>Rili 日历控件【支持ie7+】 <a href="http://www.thisummer.top/children/rose/Rili/">demo</a>
**引入javascript**
```html
<script type="text/javascript" src="js/rose.rili.js"></script>
```
**引入css**
```html
<link rel="stylesheet" type="text/css" href="css/main.css">
```
**默认样式**
```css
li{
	list-style: none;
}
#rili{
	width: 300px;
	position: absolute;
	background-color: #eee;
}
#rili .header{
	width:100%;
	height: 35px;
	background-color: #1BBC9B;
	border-radius: 6px;
	overflow: hidden;
	position: relative;
}
#rili .header .prev,#rili .header .next{
	width: 40px;
	height: 35px;
	float: left;
	text-align: center;
	line-height: 35px;
	cursor: pointer;
}
#rili .header .prev{
	float: right;
}
#rili .header .inow{
	width: 160px;
	position: absolute;
	left: 50%;
	height: 35px;
	text-align: center;
	line-height: 35px;
	margin-left: -80px;

}
#rili .content{
	width: 100%;

}
#rili .content .theader{
	width: 100%;
	height: 30px;
	background-color: #fff;
	border-bottom: 1px solid #C8CACC;
}
#rili .content .theader li{
	width: 14%;
	float: left;
	line-height: 30px;
	text-align: center;
	color: #333;
}
#rili .content .date{
	width: 100%;
	height:30px;
	border-bottom: 1px solid #C8CACC;
	background-color: #fff;
}
#rili .content .date li{
	width: 14%;
	float: left;
	line-height: 30px;
	text-align: center;
	cursor: pointer;
}
#box{
	margin:200px;
}
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
