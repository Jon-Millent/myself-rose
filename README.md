#rose
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
