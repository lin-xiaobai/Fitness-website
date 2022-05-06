$(function(){
	var pageTotal = 0;


	//登入框
	$("#dialog-form1").dialog({
	   modal:true, //以模式方式打开对话框，即页面背景为灰色
	   autoOpen:false,//不自动打开对话框
	   show: {//动画
			effect: "blind",
			duration: 700
		  },
	   open: function (event, ui) {//关闭x
		$(".ui-dialog-titlebar-close", $(this).parent()).hide();
	   },
		buttons:{
			"登入":function(){
				var $text1 = $("#dialog-form1 input:first").val();
				var $text2 = $("#dialog-form1 input:last").val();
				var $this = $(this);
				// 获取页数与数据总数
				$.ajax({
					type: "get",
					url: "user.json",
					dataType: "json",
					success: function(res) {
						var list = res.data
						// console.log(list)
						for(var $i = 0; $i < list.length; $i++) {
								var real=true;
								real = true && list[$i].name == $text1;
								console.log($text1);
								console.log(list[$i].name);
								if(real==true){
									real = real && list[$i].pwd == $text2;
									console.log(real);
									if(real){
										$i = list.length;
										$("#register>a>span:first").removeClass("glyphicon glyphicon-user").addClass("glyphicon glyphicon-envelope");
										$("#register>a>span:last").text("信息");
										$("#register").unbind();
										// $("#register").text("信息");
										$("#user>a>span:first").removeClass("glyphicon glyphicon-log-in").addClass("glyphicon glyphicon-user");
										$("#user>a>span:last").text("我的");
										$("#user").unbind();
										$this.dialog("close");
									}else{
										alert("密码错误");
									}
								}else{
									alert("账号不存在");
								}
						}
					}
				});		
				
			},
			"取消":function(){
				$(this).dialog("close");
			},
		},
		
	});
	// 注册框
	$("#user").click(function(){
		$("#dialog-form1").dialog("open");
	})
	// $("#dialog-form button:last").addClass("btn btn-primary");
	// var $btn=$("#dialog-form button:last");
	// console.log($btn);
	//注册
	$("#dialog-form2").dialog({
	   modal:true, //以模式方式打开对话框，即页面背景为灰色
	   autoOpen:false,//不自动打开对话框
	   show: {//动画
			effect: "blind",
			duration: 700
		  },
	   open: function (event, ui) {//关闭x
		$(".ui-dialog-titlebar-close", $(this).parent()).hide();
	   },
		buttons:{
			"注册":function(){
				$(this).dialog("close");
			},
			"取消":function(){
				$(this).dialog("close");
			},
		},
		
	});
	$("#register").click(function(){
		$("#dialog-form2").dialog("open");
	})
})