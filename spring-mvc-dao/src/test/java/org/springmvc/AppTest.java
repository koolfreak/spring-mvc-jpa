package org.springmvc;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;
import org.springmvc.dao.person.PersonDao;
import org.springmvc.model.Address;
import org.springmvc.model.Person;

/**
 * Unit test for simple App.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application-jpa-context-test.xml","classpath:app-jpa-dao-ctx-test.xml"})
@Transactional
@TransactionConfiguration(defaultRollback = false)
public class AppTest extends AbstractJUnit4SpringContextTests
{

    @Autowired private PersonDao personDao;

    @Test
    public void testSavePerson(){
        Person person = new Person();
        Address address = new Address();
        person.setFirstName("Billy");
        person.setLastName("Nollase");
        person.setMiddleInitial("A");
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
