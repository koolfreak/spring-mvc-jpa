/**
 * 
 */
package org.springmvc.service.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.userdetails.UserDetails;
import org.springframework.security.userdetails.UserDetailsService;
import org.springframework.security.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springmvc.dao.person.PersonDao;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 25 - 11:52:37
 */
@Service("authManager")
public class AuthManagerImpl implements UserDetailsService
{

	@Autowired private PersonDao personDao;
	
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException, DataAccessException
	{
		final List<String> roles = new ArrayList<String>();
		roles.add("ROLE_ADMIN");
		roles.add("ROLE_USER");
		roles.add("ROLE_MANAGER");
		
		Person user = personDao.loadByUsername(username);
		if( user != null)
		{
			UserGrantedAuthorities rolesAuth[] = new UserGrantedAuthorities[roles.size()];
			for(int i = 0;i < roles.size(); i++)
			{
				rolesAuth[i] = new UserGrantedAuthorities(roles.get(i));
			}
			
			return new UserCredentials(rolesAuth, user.getPassword(), user.getUsername());
		}
		
		return null;
	}

}
