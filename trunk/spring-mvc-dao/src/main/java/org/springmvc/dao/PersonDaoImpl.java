/**
 * 
 */
package org.springmvc.dao;

import org.springframework.dao.DataAccessException;
import org.springframework.orm.jpa.support.JpaDaoSupport;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 24 - 00:29:13
 */
public class PersonDaoImpl extends JpaDaoSupport implements PersonDao
{

	public void save(Person person)
	{
		getJpaTemplate().persist(person);
	}
	
	public void update(Person person) throws DataAccessException
	{
		getJpaTemplate().merge(person);
	}

	public void delete(Person person) throws DataAccessException
	{
		getJpaTemplate().remove(person);
	}

	public Person load(Long id) throws DataAccessException
	{
		return (Person) getJpaTemplate().find(Person.class, id);
	}
	
	
}
