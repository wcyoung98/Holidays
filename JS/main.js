function popupOpen(){
	var winY = window.screenTop;
	var winX = window.screenLeft;
	var top = winY + (document.body.clientHeight - 350)/2;
	var left = winX + (document.body.clientWidth - 450)/2;
	var URL  = "popup.jsp";
	var option = "left="+left+", top="+top+", width=450, height=350," +
			"toolbar=no, menubar=no, location=no, directories=no," +
			"status=no, scrollbars=no, resizable=no";
	window.open(URL,"",option);
}

function popupClose(){
	window.close();
}

function check(){
	var form = document.form;
	if(form.date.value.replace( /(\s*)/g, "") == "" && form.name.value.replace( /(\s*)/g, "") == ""){
		alert("날짜와 공휴일 명을 입력해주세요.");
		return;
	} else if(form.date.value.replace( /(\s*)/g, "") == ""){
		alert("날짜를 입력해주세요.");
		return;
	} else if(form.name.value.replace( /(\s*)/g, "") == ""){
		alert("공휴일 명을 입력해주세요.");
		return;
	}
	form.submit();
}