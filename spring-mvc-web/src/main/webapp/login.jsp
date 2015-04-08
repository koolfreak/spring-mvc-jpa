
<%@ include file="/includes/include.jsp" %>
<%@ page import="org.springframework.security.core.AuthenticationException" %>
<%@ page import="org.springframework.security.authentication.AuthenticationServiceException" %>
<%@ page import="org.springframework.security.authentication.BadCredentialsException" %>
<%@ page import="org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter" %>
<%@ page import="org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter" %>

<html>
	<head>
	
	</head>
<body>
	
		<form name="form" method="POST" action="<c:url value='/j_spring_security_check'/>" style="padding:0px 0px 0px 16px" cellpadding="0" cellspacing="0">
		<% AuthenticationException authEx = (AuthenticationException) session.getAttribute(AbstractAuthenticationProcessingFilter.SPRING_SECURITY_LAST_EXCEPTION_KEY); %>
		<table>
                <tr>
                  <td width="20%" align="right">Username:</td>
                  <td width="80%" colspan="2">
                    <input id="username" class="username" type='text' size="50" name='<%= UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY %>'
                    <% if (authEx != null) { %>
                           value='<%= session.getAttribute(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_LAST_USERNAME_KEY) %>'
                    <% } %>></td>
                </tr>
                <tr>
                  <td width="20%" align="right">Password:</td>
                  <td width="80%" colspan="2">
                    <input id="password" class="password" type='password' size="50"
                           name='<%= UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_PASSWORD_KEY %>'>
                  </td>
                </tr>
                <tr>
                  <td width="80%" colspan="2" align="left">
                    <%
                      if (authEx != null) {
                        if (authEx instanceof BadCredentialsException || authEx instanceof AuthenticationServiceException) {
                    %>
                    <font color="red">
                      Login failed. Bad credentials.
                    </font>
                    <% } else if (authEx.getClass().getName().equals("org.springframework.security.authentication.DisabledException")) { %>
                    <font color="red">
                      Login failed. Account is disabled.
                    </font>
                    <% } else { %>
                    <font color="red">
                      Login failed. <%=authEx.getMessage() %>
                    </font>
                    <% }
                    }
                    %>
                   
                  </td>
                  <td width="20%" align="right">
                    <input type="submit" name="Submit" value="Login" style="width:90px; color:#666; padding: 1px 0px 1px 0px;">
                  </td>
                </tr>
                <tr>
                  <td width="20%">&nbsp;</td>
                  <td width="60%">&nbsp;</td>
                  <td width="20%">&nbsp;</td>
                </tr>
              </table>
              </form>
</body>
</html>