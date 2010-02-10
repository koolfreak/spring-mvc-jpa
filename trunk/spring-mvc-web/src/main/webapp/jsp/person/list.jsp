
<%@ include file="/includes/include.jsp" %>

<html>
	<head>
	
	</head>
<body>

	<table border="1">
		<tr>
			<td>First Name</td>
			<td>Last Name</td>
			<td>Middle Initial</td>
			<td>Address</td>
			<td>City</td>
		</tr>
		<c:forEach items="${persons}" var="person" >
			<tr>
				<td><c:out value="${person.firstName}" ></c:out></td>
				<td><c:out value="${person.lastName}"></c:out></td>
				<td><c:out value="${person.middleInitial}"></c:out></td>
				<td><c:out value="${person.streetAddress1}"></c:out>,<c:out value="${person.streetAddress2}"></c:out></td>
				<td><c:out value="${person.city}"></c:out></td>
			</tr>
		</c:forEach>
	</table>

</body>
</html>