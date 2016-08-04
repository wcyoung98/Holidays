//CSS.START-----------------------------------------------------
function onMouseSun(td){
	td.style.backgroundColor = "#DFDFDF";
	td.style.color = "#CC0033";
	td.style.fontWeight = "bold";
	td.style.cursor = "pointer";
}
function outMouseSun(td){
	td.style.backgroundColor = "#FFF";
	td.style.fontWeight = "normal";
}

function onMouse(td){
	td.style.backgroundColor = "#DFDFDF";
	td.style.color = "#000099";
	td.style.fontWeight = "bold";
	td.style.cursor = "pointer";
}
function outMouse(td){
	td.style.backgroundColor = "#FFF";
	td.style.fontWeight = "normal";
}

function onMouseSat(td){
	td.style.backgroundColor = "#DFDFDF";
	td.style.color = "#0000FF";
	td.style.fontWeight = "bold";
	td.style.cursor = "pointer";
}
function outMouseSat(td){
	td.style.backgroundColor = "#FFF";
	td.style.fontWeight = "normal";
}
//CSS.END---------------------------------------------------
function datePicker(tYear ,tMonth, tDay){  //날짜를 추출하기 위한 함수
	picDate = new Date(tYear, tMonth, tDay);  //변경된 날짜 객체 선언후 날짜 셋팅
	document.form.date.value = picDate.getFullYear() + "-" + (picDate.getMonth()+1) + "-" + picDate.getDate();
	document.getElementById('calendarView').style.display = "none";
}

function calendar(tYear, tMonth){  //달력함수
	document.getElementById('calendarView').style.display = "block";
	var nowDate = new Date();  //오늘 날짜 객체 선언
	var nYear = nowDate.getFullYear();  //오늘의 년도
	var nMonth = nowDate.getMonth();  //오늘의 월 (0월부터 시작)
	var endDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //각달의 마지막 날짜
	var dayName = new Array("일", "월", "화", "수", "목", "금", "토");
	var col = 0;  //나중에 앞 뒤 빈 날짜칸 계산
	
	if(tYear == null) tYear = nYear;
	if(tMonth == null) tMonth = nMonth;
	
	eDate = new Date();  //변경된 날짜 객체 선언
	eDate.setFullYear(tYear);  //변경된 년도 셋팅
	eDate.setMonth(tMonth);  //변경된 월 세팅
	eDate.setDate(1);  //날짜는 1일로 설정
	var fNumday = eDate.getDay()  //첫번째 날짜 1일의 숫자 요일
	var lastDay = endDay[eDate.getMonth()];  //변경된 월의 마지막 날짜
	
	if((eDate.getMonth() == 1) && (((eDate.getYear() % 4 == 0)&&
			(eDate.getYear() % 100 != 0)) || eDate.getYear() % 400 == 0))
		lastDay = 29;
	
	var calendarStr = "<table>";
	calendarStr += "<tr align=center><td valign=middle>";
	calendarStr += "<a href=javascript:calendar(" + tYear + "," + (tMonth-1) + ") class=preNext>◀</a>";  //월을 넘길 때 -1 해서 넘긴다(년도는 자동 계산됨)
	calendarStr += "</td><td colspan=5>";
	calendarStr += "<font size=3 color=black><b>" + eDate.getFullYear() + "년 " + (eDate.getMonth()+1) + "월</b></font>";  //해당하는 년도와 월 표시
	calendarStr += "</td><td valign=middel>";
	calendarStr += "<a href=javascript:calendar(" + tYear + "," + (tMonth+1) + ") class=preNext>▶</a>";  //월을 넘길 때 +1 해서 넘긴다(년도는 자동 계산됨)
	calendarStr += "</td></tr><tr>";
	for(var i = 0; i < dayName.length; i++){
		calendarStr += "<td class=week>" + dayName[i] + "</td>";  //숫자 요일을 날짜 요일로 입력
	}
	
	calendarStr += "</tr><tr align=center>";
	
	for(var i = 0; i < fNumday; i++){
		calendarStr += "<td>&nbsp;</td>";
		col++;
	}
	for(var i = 1; i <= lastDay; i++){  //해당 월의 달력
		if(col == 0){
			calendarStr += "<td class=sunday onmouseover=onMouseSun(this) onmouseout=outMouseSun(this) onClick=datePicker(" + tYear + "," + tMonth + "," + i + ")>" + i + "</td>";
		} else if(1 <= col && col <= 5) {
			calendarStr += "<td class=workday onmouseover=onMouse(this) onmouseout=outMouse(this) onClick=datePicker(" + tYear + "," + tMonth + "," + i + ")>" + i + "</td>";
		} else if(col == 6){
			calendarStr += "<td class=satday onmouseover=onMouseSat(this) onmouseout=outMouseSat(this) onClick=datePicker(" + tYear + "," + tMonth + "," + i + ")>" + i + "</td>";
		}
		col++;
		if(col == 7){  //7칸을 만들면 줄 바꿔서 새 줄을 만들고 다시 첫 칸부터 시작
			calendarStr += "</tr><tr align=center>";
			col = 0;
		}
	}
	
	for(i = col; i < dayName.length; i++){  //마지막 날에서 남은 요일의 빈 칸 만들기
		if(col == 0) break;
		calendarStr += "<td>&nbsp;</td>";
	}

	calendarStr += "</tr></table>";
	document.getElementById('calendarView').innerHTML = calendarStr;
}