/**
 * 
 */
package org.springmvc.web.ws.endpoint;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.ws.server.endpoint.AbstractMarshallingPayloadEndpoint;
import org.springws.ws.jaxb.ObjectFactory;
import org.springws.ws.jaxb.PersonDetails;
import org.springws.ws.jaxb.RegistrationResponse;



/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 10 - 17:26:41
 */
public class PersonMarshallingEndpoint extends
		AbstractMarshallingPayloadEndpoint
{
	private static final Log log = LogFactory.getLog(PersonMarshallingEndpoint.class);
	
	/* (non-Javadoc)
	 * @see org.springframework.ws.server.endpoint.AbstractMarshallingPayloadEndpoint#invokeInternal(java.lang.Object)
	 */
	@Override
	protected Object invokeInternal(Object request) throws Exception
	{
		PersonDetails detail = (PersonDetails) request;
		
		log.info("username: "+detail.getUserName());
		
		ObjectFactory factory = new ObjectFactory();
		RegistrationResponse resp = factory.createRegistrationResponse();
		resp.setRegistrationResponseCode("Success");
		return resp;
	}

}
