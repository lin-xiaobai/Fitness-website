           var $name=$("#name");
            var $email=$("#email");
            var $pwd=$("#password");
            var allFields=$([]).add($name).add($email).add($pwd);
           
            function checkLength(val,minLen,maxLen,txt){
                //检测长度,val接收被检测的数据值，minLen是长度最小值，maxLen是长度最大值，txt接收被检测的数据名称
                if(val.length>maxLen ||val.length<minLen){
                    $(".validateTips").text(txt+"的长度必须在"+minLen+"和"+maxLen+"之间");
                    return false;
                }else{
                    return true;
                }
                
            }
            $("#dialog-form").dialog({
            width:300,
            height:300,
            modal:true, //以模式方式打开对话框，即页面背景为灰色
            autoOpen:false,//不自动打开对话框
            buttons:{
                "创建用户":function(){
                    //要求用户名在6-8位之间，密码在8-12位之间，邮箱在10-20位之间
                    var bValid=true;
                    bValid=bValid&&checkLength($name.val(),6,8,"用户名");
                    bValid=bValid&&checkLength($email.val(),10,20,"邮箱");
                    bValid=bValid&&checkLength($pwd.val(),8,12,"密码");
                    if(bValid){
                    $("#users tbody").append(`<tr><td>${$name.val()}</td><td>${$email.val()}</td><td>${$pwd.val()}</td></tr>`);
                    $(this).dialog("close");
                }
                },
                "取消":function(){
                    $(this).dialog("close");
                }
            },close:function(){
                allFields.val("");
            }
        });

        $(".btn1").button().click(function(){
            $("#dialog-form").dialog("open");
        })
    
  