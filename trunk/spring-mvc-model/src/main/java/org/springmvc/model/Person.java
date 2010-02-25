/**
 * 
 */
package org.springmvc.model;

import java.io.Serializable;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 24 - 00:31:52
 */
@NamedQueries({
	@NamedQuery(
		name="loadByUsername",
		query="select person from Person person where person.username = ?1"
	)
})
@Entity
@Table(name = "jpa_person")
public class Person implements Serializable
{

	@Id
	@GeneratedValue
	private int id;
	private String firstName;
	private char middleInitial;
	private String lastName;
	private String username;
	private String password;
	
	@Embedded
	private Address address = new Address();

	public Person() {
    }
 
    public Person(final String fn, final char mi, final String ln,
            final Address address) {
        setFirstName(fn);
        setMiddleInitial(mi);
        setLastName(ln);
        setAddress(address);
    }


	public String getFirstName()
	{
		return firstName;
	}

	public void setFirstName(final String firstName)
	{
		this.firstName = firstName;
	}

	public int getId()
	{
		return id;
	}

	public void setId(final int id)
	{
		this.id = id;
	}

	public String getLastName()
	{
		return lastName;
	}

	public void setLastName(final String lastName)
	{
		this.lastName = lastName;
	}

	public char getMiddleInitial()
	{
		return middleInitial;
	}

	public void setMiddleInitial(final char middleInitial)
	{
		this.middleInitial = middleInitial;
	}

	public Address getAddress()
	{
		return address;
	}

	public void setAddress(Address address)
	{
		this.address = address;
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

}
