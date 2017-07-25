window.onload=function(){
	var div1=document.getElementById("div1")
		var ul1=document.getElementsByClassName("ii")[0]
		var li1=document.getElementsByClassName("vv")
		var a1=document.getElementsByClassName("ss")
		var a=2
			ul1.innerHTML+=ul1.innerHTML
			ul1.style.width=li1[0].offsetWidth*li1.length+"px"
			function move(){
				if(ul1.offsetLeft<-ul1.offsetWidth/2){
					ul1.style.left="0"
				}
				if(ul1.offsetLeft>0){
					ul1.style.left=-ul1.offsetWidth/2+"px"
				}
				ul1.style.left=ul1.offsetLeft+a+"px"
		
			}
			var timer=setInterval(move,30)
			div1.onmousemove=function(){
				clearInterval(timer)
			}
			div1.onmouseout=function(){
				timer=setInterval(move,30)
			}
			a1[0].onclick=function(){
				a=-2
			}
			a1[1].onclick=function(){
				a=2
			}
}