/**
 * 
 */
package org.springmvc.web.controller.person;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springmvc.model.Person;
import org.springmvc.service.person.PersonManager;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

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
	
	@RequestMapping(value = "/person/save", method = RequestMethod.POST)
	public ModelAndView savePerson(@Valid Person person, BindingResult bindingResult, RedirectAttributes redirectAttributes)
	{
		if(bindingResult.hasErrors()){
            ModelAndView mav = new ModelAndView("person/add/Person Add");
            mav.addObject("person" , person);
			return mav;
		}
		personManager.save(person);
		redirectAttributes.addFlashAttribute("savePerson","Success");
		return new ModelAndView("redirect:/person/list.htm");
	}
	
	@RequestMapping(value = "/person/add",method = RequestMethod.GET )
	public ModelAndView add(Person person){
        ModelAndView mav = new ModelAndView("person/add/Person Add");
        mav.addObject("person" , person);
        return mav;
    }

    @RequestMapping(value = "/person/edit/{id}",method = RequestMethod.GET )
    public ModelAndView edit(@PathVariable Integer id){
        Person person = personManager.load(id);
        ModelAndView mav = new ModelAndView("person/add/Person Add");
        mav.addObject("person" , person);
        return mav;
    }



	@RequestMapping(value="/lookup/{id}" )
	public @ResponseBody Person getPerson(@PathVariable Integer id){
		return personManager.load(id);
	}
}
