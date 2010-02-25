/**
 * 
 */
package org.springmvc.dao.person;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.dao.DataAccessException;
import org.springframework.orm.jpa.JpaCallback;
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
	
	public Person update(Person person) throws DataAccessException
	{
		return getJpaTemplate().merge(person);
	}

	public void delete(Person person) throws DataAccessException
	{
		getJpaTemplate().remove(person);
	}

	public Person load(int id) throws DataAccessException
	{
		return getJpaTemplate().find(Person.class, id);
	}

	public void remove(Person entity) throws DataAccessException
	{
		getJpaTemplate().remove(entity);
	}

	@SuppressWarnings("unchecked")
	public List<Person> loadAll() throws DataAccessException
	{
		return (List<Person>) getJpaTemplate().execute(new JpaCallback()
		{
			@Override
			public Object doInJpa(EntityManager em) throws PersistenceException
			{
				Query qry = em.createQuery("select person from Person person");
				return qry.getResultList();
			}
		},true);
	}

	public Person loadByUsername(final String username) throws DataAccessException
	{
		return (Person) getJpaTemplate().execute(new JpaCallback()
		{
			@Override
			public Object doInJpa(EntityManager em) throws PersistenceException
			{
				Query qry = em.createNamedQuery("loadByUsername");
				qry.setParameter(1, username);
				return qry.getSingleResult();
			}
		},true); 
	}
}
