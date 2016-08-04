<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="CSS/popup.css">
	<link rel="stylesheet" type="text/css" href="CSS/calendar.css">
	<title>공휴일 등록</title>
</head>
<body>
	<div id="wrap">
		<form name="form" action="input.jsp">
			<table class="form">
				<tr>
					<th>날짜</th>
					<td>
						<span id="date_box">
							<input type="text" name="date">
							<img id="calendar_img" src="IMG/calendar.jpg" onclick="calendar()">
						</span>
						<input type="checkbox" name="every_year"> 매해 적용
					</td>
				</tr>
				<tr>
					<th>공휴일 명</th>
					<td><input type="text" name="name" size="36"></td>
				</tr>
				<tr>
					<th>비	고</th>
					<td><input type="text" name="note" size="36"></td>
				</tr>
			</table>
			<center>
				<div id="calendarView"></div>
				<input type="button" value="저장" onclick="check()">
				<input type="button" value="취소" onclick="popupClose()">
			</center>
		</form>
	</div>
	<script type="text/javascript" src="JS/calendar.js"></script>
	<script type="text/javascript" src="JS/main.js"></script>
</body>
</html>