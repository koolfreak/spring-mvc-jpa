/**
 * 
 */
package org.springmvc.web.ws.iterceptor;

import java.util.Iterator;

import org.springframework.ws.WebServiceMessage;
import org.springframework.ws.context.MessageContext;
import org.springframework.ws.server.EndpointInterceptor;
import org.springframework.ws.soap.AbstractSoapMessage;
import org.springframework.ws.soap.SoapEnvelope;
import org.springframework.ws.soap.SoapHeader;
import org.springframework.ws.soap.SoapHeaderElement;
import org.springframework.ws.soap.saaj.SaajSoapMessage;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 10 - 09:17:21
 */
public class WSHeaderInterceptor implements EndpointInterceptor
{

	/* (non-Javadoc)
	 * @see org.springframework.ws.server.EndpointInterceptor#handleFault(org.springframework.ws.context.MessageContext, java.lang.Object)
	 */
	public boolean handleFault(MessageContext messageContext, Object endpoint)
			throws Exception
	{
		return false;
	}

	@Override
	public void afterCompletion(MessageContext messageContext, Object o, Exception e) throws Exception {

	}

	/* (non-Javadoc)
	 * @see org.springframework.ws.server.EndpointInterceptor#handleRequest(org.springframework.ws.context.MessageContext, java.lang.Object)
	 */
	public boolean handleRequest(MessageContext messageContext, Object endpoint)
			throws Exception
	{
		WebServiceMessage requestMessage = messageContext.getRequest();
		AbstractSoapMessage abstractSaajMessage = (AbstractSoapMessage) requestMessage;
		SaajSoapMessage saajSoap = (SaajSoapMessage) abstractSaajMessage;

		SoapEnvelope soapEnvelop = saajSoap.getEnvelope();
		SoapHeader soapHeader = soapEnvelop.getHeader();
		Iterator<?> iterator = soapHeader.examineAllHeaderElements();
		while (iterator.hasNext()) {
			SoapHeaderElement element = (SoapHeaderElement) iterator.next();
			String headerName = element.getName().getLocalPart();
			String headerValue = element.getText();
			System.out.println("Header: " + headerName + ", value: " + headerValue);
		}

		
		return true;
	}

	/* (non-Javadoc)
	 * @see org.springframework.ws.server.EndpointInterceptor#handleResponse(org.springframework.ws.context.MessageContext, java.lang.Object)
	 */
	public boolean handleResponse(MessageContext messageContext, Object endpoint)
			throws Exception
	{
		return false;
	}

}
