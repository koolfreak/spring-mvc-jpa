package org.springmvc.service.security;

import org.springframework.ldap.core.DirContextOperations;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.ldap.userdetails.LdapAuthoritiesPopulator;

import java.util.Collection;
import java.util.HashSet;

/**
 * Created by emmanuelnollase on 2/8/16.
 */
public class LdapCustomPopulator implements LdapAuthoritiesPopulator {

    @Override
    public Collection<? extends GrantedAuthority> getGrantedAuthorities(DirContextOperations dirContextOperations, String username) {
        Collection<GrantedAuthority> gas = new HashSet<GrantedAuthority>();
        gas.add(new SimpleGrantedAuthority("user"));
        return gas;
    }
}
