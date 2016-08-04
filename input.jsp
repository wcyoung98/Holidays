<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
</head>
<body>
<%
	String date = request.getParameter("date");
	String name = request.getParameter("name");
	String note = request.getParameter("note");
	if(request.getParameter("every_year") != null){
		date = date.replace(date.substring(0,4), "0001");
	}

	String url = "jdbc:mysql://localhost:3306/";
	String db = "company";
	String id = "root";
	String pw = "apmsetup";

	Connection con = null;

	try {
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection(url+db, id, pw);
		con.setAutoCommit(false);
		String query = "INSERT INTO holidays VALUES(?,?,?)";
		PreparedStatement pstmt = con.prepareStatement(query);
		pstmt.setString(1, date);
		pstmt.setString(2, name);
		pstmt.setString(3, note);
		pstmt.executeUpdate();
		con.commit();
		pstmt.close();
		con.setAutoCommit(true);
		con.close();
%>
	<script type="text/javascript">window.close();</script>
<%
	} catch(Exception e){
		if(con != null){
			try {
				con.rollback();
			} catch(SQLException sql){
				sql.printStackTrace();
			}
		}
		e.printStackTrace();
%>
	<script type="text/javascript">
	alert("입력하신 값이 오류를 발생시켰습니다.\n다시확인해주세요");
	history.back();
	</script>
<%
	}
%>
</body>
</html>