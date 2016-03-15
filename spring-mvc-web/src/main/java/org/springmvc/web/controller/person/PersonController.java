/**
 * 
 */
package org.springmvc.web.controller.person;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
@RequestMapping(value = "/person")
public class PersonController
{
	@Autowired private PersonManager personManager;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView index()
	{
		ModelAndView mav = new ModelAndView("person/list");
		
		List<Person> ps = personManager.loadAll();
		mav.addObject("persons",ps);
		mav.setViewName("person/list/Person List");
		return mav;
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ModelAndView create(@Valid Person person, BindingResult bindingResult, RedirectAttributes redirectAttributes)
	{
		if(bindingResult.hasErrors()){
            ModelAndView mav = new ModelAndView("person/add/Person Add");
            mav.addObject("person" , person);
			return mav;
		}
		personManager.save(person);
		redirectAttributes.addFlashAttribute("savePerson","Added a Person");
		return new ModelAndView("redirect:/person/");
	}
	
	@RequestMapping(value = "/add",method = RequestMethod.GET )
	public ModelAndView add(Person person){
        ModelAndView mav = new ModelAndView("person/add/Person Add");
        mav.addObject("person" , person);
        return mav;
    }

    @RequestMapping(value = "/edit/{id}",method = RequestMethod.GET )
    public ModelAndView edit(@PathVariable Long id){
        Person person = personManager.load(id);
        ModelAndView mav = new ModelAndView("person/edit/Person Edit");
        mav.addObject("person" , person);
        return mav;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ModelAndView update(@Valid Person person, BindingResult bindingResult, RedirectAttributes redirectAttributes)
    {
        if(bindingResult.hasErrors()){
            ModelAndView mav = new ModelAndView("person/edit/Person Edit");
            mav.addObject("person" , person);
            return mav;
        }
        personManager.update(person);
        redirectAttributes.addFlashAttribute("savePerson","Success");
        return new ModelAndView("redirect:/person/");
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public @ResponseBody Map<String, String> destroy(@PathVariable Long id){
        Person person = personManager.load(id);
        personManager.remove(person);
        Map<String, String> response = new HashMap<String, String>();
        response.put("success", "true");
        return response;
    }

	@RequestMapping(value="/lookup/{id}" )
	public @ResponseBody Person getPerson(@PathVariable Long id){
		return personManager.load(id);
	}
}
