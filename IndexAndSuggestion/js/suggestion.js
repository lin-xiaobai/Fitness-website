$(function(){
	$(".form_datetime").datetimepicker({
		format : 'yyyy-mm-dd',
		minView : 'month',
		language : 'zh-CN',
		autoclose : true,//选中自动关闭
		startDate : '1900-01-01',
		todayBtn : true
	//显示今日按钮
	});
})