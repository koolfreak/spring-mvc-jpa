/**
 * 
 */
package org.springmvc.service.person;

import java.util.List;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springmvc.model.Person;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 30 - 23:19:53
 */
@Transactional
public interface PersonManager
{
	void save(Person person);

	void remove(Person person);

	Person update(Person person);

	@Transactional(readOnly = true)
	Person load(int id);

	@Transactional(readOnly = true)
	List<Person> loadAll();
}
