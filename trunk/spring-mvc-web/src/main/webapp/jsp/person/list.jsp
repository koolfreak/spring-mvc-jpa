
<%@ include file="/includes/include.jsp"%>

<html>
<head>
	<script type="text/javascript" language="JavaScript"	src="<c:url value='/javascript/dwr/dwr-remoting.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/dwr/interface/DwrPersonJavascript.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/dwr/engine.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/dwr/util.js'/>"></script>
	<link rel="stylesheet" href="<%= request.getContextPath() %>/css/windragresize.css" type="text/css">
</head>
<body>

<table border="1">
	<tr>
		<td>First Name</td>
		<td>Last Name</td>
		
	</tr>
	<c:forEach items="${persons}" var="person">
		<tr>
			<td>
				<a href="javascript: DwrRemotingEvent.getPersonById('${person.id}')">
					<c:out value="${person.firstName}"></c:out>
				</a>
			</td>
			<td><c:out value="${person.lastName}"></c:out></td>
		</tr>
	</c:forEach>
</table>

<div id="personDetails" width="400" style="display: none;border: solid 1px #000000;">
	<ul>
		<li>First Name:&nbsp;<span id="personFname"></span></li>
		<li>Middle Initial:&nbsp;<span id="personInitial"></span></li>
		<li>Last Name:&nbsp;<span id="personLname"></span></li>
		<li>Address 1:&nbsp;<span id="personAdd1"></span></li>
		<li>Address 2:&nbsp;<span id="personAdd2"></span></li>
		<li>City:&nbsp;<span id="personAddCity"></span></li>
		<li>State:&nbsp;<span id="personAddState"></span></li>
		<li>Zip:&nbsp;<span id="personAddZip"></span></li>
	</ul>
</div>

</body>
</html>