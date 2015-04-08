/**
 * 
 */
package org.springmvc.service.security;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 25 - 13:24:39
 */
public class UserCredentials implements UserDetails
{
	private Collection<GrantedAuthority> authorities;

	private String password;

	private String username;

	private boolean accountNonExpired = true;

	private boolean accountNonLocked = true;

	private boolean credentialsNonExpired = true;

	private boolean enabled = true; // TODO: apply DB values

	
	public UserCredentials(Collection<GrantedAuthority> authorities, String password,
			String username)
	{
		this.authorities = authorities;
		this.password = password;
		this.username = username;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.security.userdetails.UserDetails#getAuthorities()
	 */
	public Collection<GrantedAuthority> getAuthorities()
	{
		return authorities;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.userdetails.UserDetails#getPassword()
	 */
	public String getPassword()
	{
		return password;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.userdetails.UserDetails#getUsername()
	 */
	public String getUsername()
	{
		return username;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.security.userdetails.UserDetails#isAccountNonExpired
	 * ()
	 */
	public boolean isAccountNonExpired()
	{
		return accountNonExpired;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.security.userdetails.UserDetails#isAccountNonLocked()
	 */
	public boolean isAccountNonLocked()
	{
		return accountNonLocked;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.security.userdetails.UserDetails#isCredentialsNonExpired
	 * ()
	 */
	public boolean isCredentialsNonExpired()
	{
		return credentialsNonExpired;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.userdetails.UserDetails#isEnabled()
	 */
	public boolean isEnabled()
	{
		return enabled;
	}

}
