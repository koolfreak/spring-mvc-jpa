/**
 * 
 */
package org.springmvc.web.controller.person;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springmvc.model.Person;
import org.springmvc.service.person.PersonManager;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 30 - 23:47:39
 */
@Controller
public class PersonController
{
	@Autowired private PersonManager personManager;
	
	@RequestMapping(value = "/person/list", method = RequestMethod.GET)
	public ModelAndView loadAllPerson()
	{
		ModelAndView mav = new ModelAndView("person/list");
		
		List<Person> ps = personManager.loadAll();
		mav.addObject("persons",ps);
		mav.setViewName("person/list/Person List");
		return mav;
	}
	
	@RequestMapping(value = "/person/add", method = RequestMethod.POST)
	public ModelAndView savePerson(@ModelAttribute(value="person")Person person)
	{
		personManager.save(person);
		
		return new ModelAndView("redirect:/person/list.htm");
	}
	
	@RequestMapping(value = "/person/add",method = RequestMethod.GET )
	public ModelAndView add(@ModelAttribute(value="person")Person person){
        ModelAndView mav = new ModelAndView("person/add/Person Add");
        return mav;
    }

	@RequestMapping(value="/lookup/id", produces="application/json")
	@ResponseBody
	public Object getPerson(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response){
		Person person = new Person();
		person.setFirstName("Eman");
		person.setLastName("Nollase");

		return person;
	}
}
