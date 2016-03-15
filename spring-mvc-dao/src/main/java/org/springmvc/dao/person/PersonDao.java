/**
 * 
 */
package org.springmvc.dao.person;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springmvc.dao.BaseDao;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 24 - 00:31:31
 */
public interface PersonDao extends CrudRepository<Person, Long>
{
	Person loadByUsername(String username) throws DataAccessException;
} 
