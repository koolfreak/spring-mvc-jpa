/**
 * 
 */
package org.springmvc.web.dwr;

import java.io.Serializable;

import org.springmvc.model.Person;
import org.springmvc.service.person.PersonManager;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 24 - 09:27:27
 */
public class DwrImpl implements Serializable
{

	private PersonManager personManager;

	public Person getPersonById(String id)
	{
		return personManager.load(Integer.valueOf(id));
	}
	
	public void setPersonManager(PersonManager personManager)
	{
		this.personManager = personManager;
	}
}
