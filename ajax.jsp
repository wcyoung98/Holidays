<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%
	String url = "jdbc:mysql://localhost:3306/";
	String db = "company";
	String id = "root";
	String pw = "apmsetup";
%>
<h2>공휴일 목록</h2>
<table class="view">
	<tr>
		<th width="250px">날짜</th>
		<th width="350px">공휴일 명</th>
		<th width="200px">비고</th>
	</tr>
<%
	Connection con = null;

	try {
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection(url+db, id, pw);
		String query = "SELECT hdate, name, note FROM holidays ORDER BY hdate ASC";
		PreparedStatement pstmt = con.prepareStatement(query);
		ResultSet rs = pstmt.executeQuery();
		String date = "";
		for(int i = 0; i < 20; i++){
			if(rs.next()){
				date = rs.getString("hdate").substring(0, 4);
%>
	<tr>
		<td>
<% 			if(date.equals("0001")){ %>
			<%= rs.getString("hdate").replace(date, "****") %>
<%			 } else { %>
			<%= rs.getString("hdate") %>
<% 			} %>
		</td>
		<td><%= rs.getString("name") %></td>
		<td><%= rs.getString("note") %></td>
	</tr>
<%
			} else {
%>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
<%
			}
		}
		rs.close();
		pstmt.close();
		con.close();
	} catch(Exception e){
		e.printStackTrace();
	}
%>
	<tr style="text-align: center;">
		<td colspan="3">Page<input type="text" value="1" size="4">of 5</td>
	</tr>
</table>
<div>
	<button class="button">삭제</button>
	<button class="button" onclick="popupOpen()">등록</button>
</div>