$(function(){
	//登入
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
					$(this).dialog("close");
				},
				"取消":function(){
					$(this).dialog("close");
				},
			},
			
		});
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
				"登入":function(){
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