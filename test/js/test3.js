'use strict'

// 定义全局变量
var emailAddress='';
var userName='';
var userPassword='';
var userBirthday='';
var userAddress='';
var userClass='';
var randomNum='';

// 获取验证码
$('.getcode').on('click',function(){
	//验证邮箱号
	emailAddress = document.getElementById('inputEmailAddress').value;
	var email = emailAddress;
	if(email==''){
		alert("请填写邮箱号码");  
        return false; 
	}
    else if(!(/^([a-zA-Z0-9]+[_|_|\-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/.test(email))){ 
        alert("邮箱号码有误，请重新填写");  
        return false; 
    } 
	randomNum = Math.random().toFixed(6).slice(-6)
	Email.send({
		Host : "smtp.qq.com",
		Username : "893528443@qq.com",
		Password : "ayaiswafbqrtbdbb",
		To : emailAddress,
		From : "893528443@qq.com",
		Subject : "注册验证码",
		Body : randomNum
	}).then(
	  message => alert("验证码为："+randomNum+"。可以到邮箱确认")
	);

	//倒计时60秒
	var timing = 60;
	$(this).text("60 s");
	var interval = setInterval(function(){
		timing=timing-1;
		if(timing<=0){
			//再次获取验证码
			document.getElementById("getcode").innerHTML="再次获取验证码";
			clearInterval(interval)
		}else{;
			var x=timing.toString()+ " s";
			document.getElementById("getcode").innerHTML=x;
		}	
	},1000)

})

// 下一步1
$('#nextStepButton1').on('click',function(){
	var code = document.getElementById('inputCodeNumber').value;
	// 假设验证码为123456
	if (code == randomNum){
		// 步骤条跳转
		$(".step-completed1").css('background-color','#cdcdcd');
		$(".step-completed1").css('border-color','#cdcdcd');
		$(".step-completed2").css('background-color','#71b5b9');
		$(".step-completed1").css('border-color','#71b5b9');

		// 步骤一组件隐藏
		$("#step1").css('display','none');

		// 步骤二组件显示
		$("#step2").css('display','');

	}
	else{
		alert("请填写正确的验证码");
		return false;
	}
})


// step2
// 日期控件的选择
$(function () {
    $('#datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: moment.locale('zh-cn')
    });
});



//上一步2
$('#nextStepButton2').on('click',function(){
	// 步骤条跳转
	$(".step-completed1").css('background-color','#71b5b9');
	$(".step-completed1").css('border-color','#71b5b9');
	$(".step-completed2").css('background-color','#cdcdcd');
	$(".step-completed1").css('border-color','#cdcdcd');

	// 步骤二组件隐藏
	$("#step2").css('display','none');

	// 步骤一组件显示
	$("#step1").css('display','');
	$("#inputCodeNumber")[0].value='';

});

//下一步3
$('#nextStepButton3').on('click',function(){
	var username = $("#userName").val();
	var a = [];
	$("input[type=password]").each(function(){
		a.push($(this).val())
	});
	var userpassword1 = a[0];
	var userpassword2 = a[1];
	var userbirthday = $("#inputBirthday").val();
	var useraddress = $("#inputAddress").val();
	var userclass = $("#inputClass").val();
	

	//对密码的判断
	if ((username=='')||(userpassword1=='')||(userpassword2=='')||(userbirthday=='')||(useraddress=='')||(userclass=='')){
		alert('请将信息填写完整');
		return false;
	}
	else if(userpassword1!=userpassword2){
		alert('错误！两次密码不相同！');
		return false;
	}
	else if(userpassword1==userpassword2){
		var patrn=/^(\w){6,20}$/;
		if(!patrn.test(userpassword1)){
			alert('密码无效！请填写6-10位的数字、字母或下划线！');
			return false;
		}
	}

	userName = username;
	userPassword = userpassword1;
	userBirthday = userbirthday;
	userAddress = useraddress;
	userClass = userclass;


	// 步骤条跳转
	$(".step-completed2").css('background-color','#cdcdcd');
	$(".step-completed2").css('border-color','#cdcdcd');
	$(".step-completed3").css('background-color','#71b5b9');
	$(".step-completed2").css('border-color','#71b5b9');

	// 修改h2的内容
	$("#title23").html("请确认您的信息");
	// 将组件显示为不可编辑
	$("#userName").attr('disabled', 'true');
	$("#inputPassword1").attr('disabled', 'true');
	$("#inputPassword2").attr('disabled', 'true');
	$("#inputBirthday").attr('disabled', 'true');
	$("textarea").attr('disabled', 'true');
	$("#inputClass").attr('disabled', 'true');
	// 隐藏步骤二的buttons元素
	$("#buttons2").css('display','none');
	// 显示步骤三的buttons元素
	$("#buttons3").css('display','');
});


//上一步4
$('#nextStepButton4').on('click',function(){
	// 修改h2的内容
	$("#title23").html("请填写相关信息");
	// 将组件显示为可编辑
	$("#userName").removeAttr("disabled");
	$("#inputPassword1").removeAttr("disabled");
	$("#inputPassword2").removeAttr("disabled");
	$("#inputBirthday").removeAttr("disabled");
	$("textarea").removeAttr("disabled");
	$("#inputClass").removeAttr("disabled");
	// 隐藏步骤三的buttons元素
	$("#buttons3").css('display','none');
	// 显示步骤二的buttons元素
	$("#buttons2").css('display','');

	// 步骤条跳转
	$(".step-completed2").css('background-color','#71b5b9');
	$(".step-completed2").css('border-color','#71b5b9');
	$(".step-completed3").css('background-color','#cdcdcd');
	$(".step-completed2").css('border-color','#cdcdcd');
	

	
});


//确认注册
$('#nextStepButton5').on('click',function(){
	alert("恭喜你，注册成功！");
	window.location.href='test3.html';
});