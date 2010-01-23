/**
 * 
 */
package org.springmvc.dao;

import org.springframework.dao.DataAccessException;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 24 - 00:31:31
 */
public interface PersonDao
{

	void save(Person person) throws DataAccessException;
	
	void update(Person person) throws DataAccessException;
	
	void delete(Person person) throws DataAccessException;
	
	Person load(Long id) throws DataAccessException;
}
