#animation
***一个匀速动画的雏形***

```javascript
window.onload=function(){
	var box=document.getElementById('box');
	animation(600,function(i){
		box.style.opacity=i;
	},0,1)
}
```
