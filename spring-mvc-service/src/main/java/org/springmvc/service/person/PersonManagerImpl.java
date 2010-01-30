/**
 * 
 */
package org.springmvc.service.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springmvc.dao.person.PersonDao;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 30 - 23:22:41
 */
@Service("personManager")
public class PersonManagerImpl implements PersonManager
{
	@Autowired private PersonDao personDao;
	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#load(java.lang.Long)
	 */
	@Override
	public Person load(Long id)
	{
		return personDao.load(id);
	}

	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#remove(org.springmvc.model.Person)
	 */
	@Override
	public void remove(Person person)
	{
		personDao.remove(person);
	}

	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#save(org.springmvc.model.Person)
	 */
	@Override
	public void save(Person person)
	{
		personDao.save(person);
	}

	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#update(org.springmvc.model.Person)
	 */
	@Override
	public Person update(Person person)
	{
		return personDao.update(person);
	}

	@Override
	public List<Person> loadAll()
	{
		return personDao.loadAll();
	}

}
