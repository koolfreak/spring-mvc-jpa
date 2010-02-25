/**
 * 
 */
package org.springmvc.service.security;

import org.springframework.security.GrantedAuthority;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 25 - 13:34:55
 */
public class UserGrantedAuthorities implements GrantedAuthority
{

	private String authority;
	
	public UserGrantedAuthorities(String authority)
	{
		this.authority = authority;
	}

	/* (non-Javadoc)
	 * @see org.springframework.security.GrantedAuthority#getAuthority()
	 */
	public String getAuthority()
	{
		return authority;
	}

	/* (non-Javadoc)
	 * @see java.lang.Comparable#compareTo(java.lang.Object)
	 */
	public int compareTo(Object o)
	{
		return ((UserGrantedAuthorities) o).authority.compareTo(this.authority);
	}

}
