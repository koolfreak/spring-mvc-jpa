package org.springmvc.web.controller.person;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.io.Serializable;

/**
 * Created by emmanuel nollase on 2/6/16.
 */
public abstract class BaseController {

    public abstract ModelAndView index();

    public abstract <T> T add(Class<T> object);

    public abstract ModelAndView create(@Valid Serializable object, BindingResult bindingResult, RedirectAttributes attributes);

    public abstract ModelAndView edit(@PathVariable Integer id);

    public abstract ModelAndView update(@Valid Serializable object, BindingResult bindingResult, RedirectAttributes attributes);

    public abstract ModelAndView destroy(@PathVariable Integer id);

}
