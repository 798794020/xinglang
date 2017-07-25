$(function(){

	//下拉菜单
	function tab (obj1,obj2){
			$(obj1).hover(function(){
				$(obj2).stop().slideDown()
				},function(){
					$(obj2).stop().slideUp()
			})
	}
	tab("#t_head a","#t_cont")
	tab("#t_head1 a","#t_cont1")
	tab("#t_head2 a","#t_cont2")
	tab("#t_head3 a","#t_cont3")
	
	//全选  全不选  反选   
	$("#qs").click(function(){
		if($(this).prop("checked")){
			$("#check input").prop("checked",true)
			$("#qbs").prop("checked",false)
		}else{
			return false
		}
	})
	$("#qbs").click(function(){
		$("#check input").prop("checked",false)
		$("#qs").prop("checked",false)
	})
	$("#fx").click(function(){
			$("#check input").each(function(){
				$(this).prop("checked",!$(this).prop("checked"))
				$("#qbs").prop("checked",false)
				$("#qs").prop("checked",false)
			})
		})
	
	
	
	//选项卡
	function tab1 (b1,b2,b3,b4,b5) {
		$(b1).mouseover(function(){
			$(b1).removeClass(b3);
			$(b2).removeClass(b4);
			$(this).addClass(b3);	
			$(b2).eq($(this).index()).addClass(b4);
		})	
	}
	function tab3 (b1,b2,b3,b4,b5) {
		$(b1).click(function(){
			$(b1).removeClass(b3);
			$(b2).removeClass(b4);
			$(this).addClass(b3);	
			$(b2).eq($(this).index()).addClass(b4);

		})	
	}
	function tab2 (b1,b2,b3,b4,b5) {
		$(b1).mouseover(function(){
			$(b1).removeClass(b3);
			$(b2).removeClass(b4);
			$(this).addClass(b3);	
			$(b2).eq($(this).parents(b5).index()).addClass(b4);
			return false
		})	
	}
	tab2('#tab_h div','#tab_c ul',"active","show","li")
	tab1('#tab_h1 li','#tab_c1 dl',"active","videoList_newList")
	tab1('#tab_h2 li','#tab_c2 ul',"active","hide")
	tab1('#tab_h3 a','#tab_c3 div',"active","show")
	tab1('#tab_h4 li','#tab_c4 dl',"active","videoList_sm")
	tab1('#tab_h5 li','#tab_c5 dl',"active","videoList_sm")
	tab1('#tab_h6 li','#tab_c6 div',"active","show")
	tab1('#tab_h7 li','#tab_c7 dl',"active","videoList_sm")
	tab1('#tab_h8 li','#tab_c8 div',"active","show")
	tab1('#tab_h9 li','#tab_c9 dl',"active","videoList_sm")
	tab1('#tab_h10 li','#tab_c10 dl',"active","videoList_sm")
	tab1('#tab_h11 li','#tab_c11 dl',"active","videoList_sm")
	tab1('#tab_h12 span','#tab_c12 dl',"active","videoList_sm")
	tab1('#tab_h13 span','#tab_c13 dl',"active","videoList_sm")
	tab1('#tab_h15 a','#tab_c15 li',"active","show")
		
		
		
		
		var ind = 0
		var wh = 384
		var ti = ""
		$(".drop span i").mouseenter(function(){
			var index = $(this).index();
			$(".c_list_scroll>ul").eq(index).css("display","block").siblings().css("display","none");
			$(this).addClass("active").siblings().removeClass("active");
			
		})
		function next_a(){	
			if(ind>4){
				ind = 0 ;
			}
			$(".drop span i").eq(ind).addClass("active").siblings().removeClass("active");
			$(".c_list_scroll>ul").eq(ind).css("display","block").siblings().css("display","none");
		}
		
		function Prev_a(){	
			if(ind<0){
				ind = 4 ;
			}
			$(".drop span i").eq(ind).addClass("active").siblings().removeClass("active");
			
			$(".c_list_scroll>ul").eq(ind).css("display","block").siblings().css("display","none");	
		}
		$(".next").click(function(){
			 ind++ ;
			 next_a();		
		});
		$(".prev").click(function(){
			 ind-- ;
			 prev_a();
		});

	//无缝滚动
	
	var div1=document.getElementById("div1")
		var ul1=document.getElementsByClassName("ii")[0]
		var li1=document.getElementsByClassName("vv")
		var a1=document.getElementsByClassName("ss")
		var a=2
		window.onload=function(){
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
})
