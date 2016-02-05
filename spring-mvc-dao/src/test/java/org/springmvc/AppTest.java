package org.springmvc;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springmvc.dao.person.PersonDao;
import org.springmvc.model.Address;
import org.springmvc.model.Person;

/**
 * Unit test for simple App.
 */
@Transactional
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"/application-jpa-context-test.xml","/app-jpa-dao-ctx-test.xml"})
public class AppTest extends AbstractJUnit4SpringContextTests
{

    private PersonDao personDao;

    @Autowired
    public void setPersonDao(PersonDao personDao) {
        this.personDao = personDao;
    }

    @Test
    @Rollback(false)
    public void testSavePerson(){
        Person person = new Person();
        Address address = new Address();
        person.setFirstName("Eman");
        person.setLastName("Nollase");
        person.setMiddleInitial('A');
        address.setCity("Pasig");
        address.setCity("Pasig");
        address.setStreetAddress1("#6 2nd St.");
        address.setStreetAddress2("Kapitolyo");
        person.setAddress(address);
        personDao.save(person);
        System.out.println("person id: => "+person.getId());
    }

    @Test
    public void testList(){
        System.out.println(personDao.loadAll());
    }
}
