/**
 * 
 */
package org.springmvc.service.person;

import java.util.ArrayList;
import java.util.Iterator;
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
	public Person load(Long id)
	{
		return personDao.findOne(id);
	}

	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#remove(org.springmvc.model.Person)
	 */
	public void remove(Person person)
	{
		personDao.delete(person);
	}

	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#save(org.springmvc.model.Person)
	 */
	public void save(Person person)
	{
		personDao.save(person);
	}

	/* (non-Javadoc)
	 * @see org.springmvc.service.person.PersonManager#update(org.springmvc.model.Person)
	 */
	public Person update(Person person)
	{
		return personDao.save(person);
	}

	public List<Person> loadAll()
	{
		List<Person> personList = new ArrayList<Person>();
		 Iterator<Person> persons = personDao.findAll().iterator();
		while (persons.hasNext()){
			personList.add(persons.next());
		}
		return personList;
	}

}
