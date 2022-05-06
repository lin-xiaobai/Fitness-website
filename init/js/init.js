$(function(){
	//设置定时器函数
	//obj:操作对象，字符串类型
	//isOpacity:判断是否需要修改透明度，布尔类型
	//animate：动画效果，字符串类型
	//time：动画时间，int类型
	var setTime =  function(obj,isOpacity,animate,time){
		setTimeout(function(){
			if(isOpacity==true){
				$(obj).css("opacity",1);
			}
			$(obj).addClass('animated '+animate);
		},time);
	}
	//删除class,参数同上
	//fullpage特效
	$('#fullpage').fullpage({
		scrollingSpeed: 500,
		navigation: true,
		navigationColor: "pink",
		afterRender: function(){
			//第一屏的动画
			setTime("#page1 p:first",true,'fadeInDown',700);
			setTime("#page1 p:eq(1)",true,'fadeInDown',1000);
			setTime("#page1 p:last",true,"fadeInDown",1000);
			setTime("#page1 button",true,"fadeInDown",1600);
		},
		onLeave: function(index){
			//离开第一屏的动画
			if(index==1){
				$("#page1 p:first").addClass('fadeOutDown');
				$("#page1 p:eq(1)").addClass('fadeOutDown');
				$("#page1 p:last").addClass('fadeOutDown');
				$("#page1 button").addClass('fadeOutDown');
			}
			if(index==2){
				setTime("#page2 .page2_msg li:eq(0)",true,'fadeOutDownBig',0);
				setTime("#page2 .page2_msg li:eq(1)",true,'fadeOutDownBig',100);
				setTime("#page2 .page2_msg li:eq(2)",true,'fadeOutDownBig',200);
				setTime("#page2 .page2_msg li:eq(3)",true,'fadeOutDownBig',300);
				$("#page2 .page2_title").animate({
					top:"0",
					speed:5000,
				});
			}
			if(index==3){
				setTime(".page3_img_box1 img:eq(0)",true,'bounceOutLeft',0);
				setTime(".page3_img_box1 img:eq(1)",true,'bounceOutDown',0);
				setTime(".page3_img_box1 img:eq(2)",true,'bounceOutDown',0);
				setTime(".page3_img_box1 img:eq(3)",true,'bounceOutLeft',0);
				
				setTime(".page3_img_box2 img:eq(0)",true,'bounceOutDown',0);
				setTime(".page3_img_box2 img:eq(1)",true,'bounceOutDown',0);
				setTime(".page3_img_box2 img:eq(2)",true,'bounceOutDown',0);
				setTime(".page3_img_box2 img:eq(3)",true,'flipOutX',0);
				
				setTime(".page3_img_box3 img:eq(0)",true,'flipOutY',0);
//				setTime(".page3_img_box1",true,'bounceOutLeft',0);
//				setTime(".page3_img_box2",true,'fadeOutDownBig',0);
//				setTime(".page3_img_box3 img",true,'flipOutY',0);
			}
			if(index==4){
				$("#page4 .page4_box_title").css('animation-name','ani1');
//				$("#page4 .page4_box_title").css('animation-timing-function','ease');
			}
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				setTime("#page1 p:first",true,'fadeInDown',0);
				setTimeout(function(){
					$("#page1 p:first").removeClass('fadeOutDown');
					$("#page1 p:first").css('opacity', '0');
				},0);
				setTime("#page1 p:eq(1)",true,'fadeInDown',300);
				setTimeout(function(){
					$("#page1 p:eq(1)").removeClass('fadeOutDown');
					$("#page1 p:eq(1)").css('opacity', '0');
				},300);
				setTime("#page1 p:last",true,"fadeInDown",300);
				setTimeout(function(){
					$("#page1 p:last").removeClass('fadeOutDown');
					$("#page1 p:last").css('opacity', '0');
				},300);
				setTime("#page1 button",true,"fadeInDown",300);
				setTimeout(function(){
					$("#page1 button").removeClass('animated fadeOutDown');
					$("#page1 button").css('opacity', '0');
				},0);
			}
			if(index==2){
				$("#page2 .page2_title").animate({
					top:"20%",
					speed:5000,
				});
				setTime("#page2 .page2_msg li:eq(0)",true,'fadeInUpBig',0);
				setTimeout(function(){
					$("#page2 .page2_msg li:eq(0)").removeClass('fadeOutDownBig');
					$("#page2 .page2_msg li:eq(0)").css('opacity', '0');
				},0);
				setTime("#page2 .page2_msg li:eq(1)",true,'fadeInUpBig',100);
				setTimeout(function(){
					$("#page2 .page2_msg li:eq(1)").removeClass('fadeOutDownBig');
					$("#page2 .page2_msg li:eq(1)").css('opacity', '0');
				},100);
				setTime("#page2 .page2_msg li:eq(2)",true,'fadeInUpBig',200);
				setTimeout(function(){
					$("#page2 .page2_msg li:eq(2)").removeClass('fadeOutDownBig');
					$("#page2 .page2_msg li:eq(2)").css('opacity', '0');
				},200);
				setTime("#page2 .page2_msg li:eq(3)",true,'fadeInUpBig',300);
				setTimeout(function(){
					$("#page2 .page2_msg li:eq(3)").removeClass('fadeOutDownBig');
					$("#page2 .page2_msg li:eq(3)").css('opacity', '0');
				},300);
			}
			if(index==3){
				setTime(".page3_img_box1 img:eq(0)",true,'bounceInLeft',100);
				setTime(".page3_img_box1 img:eq(1)",true,'bounceInDown',200);
				setTime(".page3_img_box1 img:eq(2)",true,'bounceInUp',150);
				setTime(".page3_img_box1 img:eq(3)",true,'bounceInUp',170);
				
				setTime(".page3_img_box2 img:eq(0)",true,'bounceInLeft',120);
				setTime(".page3_img_box2 img:eq(1)",true,'bounceInDown',200);
				setTime(".page3_img_box2 img:eq(2)",true,'bounceInUp',150);
				setTime(".page3_img_box2 img:eq(3)",true,'flipInX',180);
				
				setTime(".page3_img_box3 img:eq(0)",true,'flipInY',0);
				setTimeout(function(){
					$(".page3_img_box1 img:eq(0)").removeClass('bounceOutLeft');
					$(".page3_img_box1 img:eq(1)").removeClass('bounceOutDown');
					$(".page3_img_box1 img:eq(2)").removeClass('bounceOutDown');
					$(".page3_img_box1 img:eq(3)").removeClass('bounceOutLeft');
				},0);
				setTimeout(function(){
					$(".page3_img_box2 img:eq(0)").removeClass('bounceOutDown');
					$(".page3_img_box2 img:eq(1)").removeClass('bounceOutDown');
					$(".page3_img_box2 img:eq(2)").removeClass('bounceOutDown');
					$(".page3_img_box2 img:eq(3)").removeClass('flipOutX');
					$(".page3_img_box3 img:eq(0)").removeClass('flipOutY');
				},0);
			}
			if(index==4){
				$("#page4 .page4_box_title").css('animation-name','ani');
			}
		}
	});
});