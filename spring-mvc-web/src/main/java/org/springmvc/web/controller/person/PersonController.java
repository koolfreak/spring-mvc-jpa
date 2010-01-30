/**
 * 
 */
package org.springmvc.web.controller.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springmvc.service.person.PersonManager;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 30 - 23:47:39
 */
@Controller
public class PersonController
{
	@Autowired private PersonManager personManager;
	
	@RequestMapping(value = "/person/add.htm", method = RequestMethod.GET)
	public ModelAndView loadAllPerson()
	{
		return new ModelAndView().addObject("persons",personManager.loadAll());
	}
}
