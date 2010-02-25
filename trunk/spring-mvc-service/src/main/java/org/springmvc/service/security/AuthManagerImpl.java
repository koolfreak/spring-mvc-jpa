/**
 * 
 */
package org.springmvc.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.userdetails.UserDetails;
import org.springframework.security.userdetails.UserDetailsService;
import org.springframework.security.userdetails.UsernameNotFoundException;
import org.springmvc.dao.person.PersonDao;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 25 - 11:52:37
 */
public class AuthManagerImpl implements UserDetailsService
{

	@Autowired private PersonDao personDao;
	
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException, DataAccessException
	{
		
		Person user = personDao.loadByUsername(username);
		if( user != null)
		{
			
		}
		
		return null;
	}

}
