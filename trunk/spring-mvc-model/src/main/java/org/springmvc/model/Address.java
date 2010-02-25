/**
 * 
 */
package org.springmvc.model;

import javax.persistence.Embeddable;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 25 - 09:37:02
 */
@Embeddable
public class Address
{
	private String streetAddress1;
	private String streetAddress2;
	private String city;
	private String state;
	private String zip;

	public Address()
	{
	}

	public final String getCity()
	{
		return city;
	}

	public final void setCity(final String city)
	{
		this.city = city;
	}

	public final String getState()
	{
		return state;
	}

	public final void setState(final String state)
	{
		this.state = state;
	}

	public final String getStreetAddress1()
	{
		return streetAddress1;
	}

	public final void setStreetAddress1(final String streetAddress1)
	{
		this.streetAddress1 = streetAddress1;
	}

	public final String getStreetAddress2()
	{
		return streetAddress2;
	}

	public final void setStreetAddress2(final String streetAddress2)
	{
		this.streetAddress2 = streetAddress2;
	}

	public final String getZip()
	{
		return zip;
	}

	public final void setZip(final String zip)
	{
		this.zip = zip;
	}

}
