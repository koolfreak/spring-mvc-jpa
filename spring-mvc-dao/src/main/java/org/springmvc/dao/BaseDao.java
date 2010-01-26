/**
 * 
 */
package org.springmvc.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 25 - 13:23:56
 */
public interface BaseDao<T>
{

	void save(T entity) throws DataAccessException;
	
	void remove(T entity) throws DataAccessException;
	
	T update(T entity) throws DataAccessException;
	
	T load(Long id) throws DataAccessException;
	
	List<T> loadAll() throws DataAccessException;
}
