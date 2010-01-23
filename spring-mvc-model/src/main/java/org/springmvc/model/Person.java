/**
 * 
 */
package org.springmvc.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 24 - 00:31:52
 */
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
	private String streetAddress1;
	private String streetAddress2;
	private String city;
	private String state;
	private String zip;

	public Person()
	{
	}

	public Person(final String fn, final char mi, final String ln,
			final String sa1, final String sa2, final String city,
			final String state, final String zip)
	{
		setFirstName(fn);
		setMiddleInitial(mi);
		setLastName(ln);
		setStreetAddress1(sa1);
		setStreetAddress2(sa2);
		setCity(city);
		setState(state);
		setZip(zip);
	}

	public String getCity()
	{
		return city;
	}

	public void setCity(final String city)
	{
		this.city = city;
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

	public String getState()
	{
		return state;
	}

	public void setState(final String state)
	{
		this.state = state;
	}

	public String getStreetAddress1()
	{
		return streetAddress1;
	}

	public void setStreetAddress1(final String streetAddress1)
	{
		this.streetAddress1 = streetAddress1;
	}

	public String getStreetAddress2()
	{
		return streetAddress2;
	}

	public void setStreetAddress2(final String streetAddress2)
	{
		this.streetAddress2 = streetAddress2;
	}

	public String getZip()
	{
		return zip;
	}

	public void setZip(final String zip)
	{
		this.zip = zip;
	}

}
