
<%@ include file="/includes/include.jsp" %>

<html>
<head>
	
</head>
<body>

	<form:form commandName="person" method="POST" action="add.htm">
		<table>
			<tr>
				<td>First Name:&nbsp;<form:input path="firstName"/></td>
			</tr>
			<tr>
				<td>Middle Initial:&nbsp;<form:input path="middleInitial"/></td>
			</tr>
			<tr>
				<td>Last Name:&nbsp;<form:input path="lastName"/></td>
			</tr>
			<tr>
				<td>Address 1:&nbsp;<form:input path="address.streetAddress1"/></td>
			</tr>
			<tr>
				<td>Address 2:&nbsp;<form:input path="address.streetAddress2"/></td>
			</tr>
			<tr>
				<td>City:&nbsp;<form:input path="address.city"/></td>
			</tr>
			<tr>
				<td>State:&nbsp;<form:input path="address.state"/></td>
			</tr>
			<tr>
				<td>Zip:&nbsp;<form:input path="address.zip"/></td>
			</tr>
		</table>
		<input type="submit" value="Submit" />
	</form:form>

</body>
</html>