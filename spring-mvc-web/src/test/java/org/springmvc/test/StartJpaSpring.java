/**
 * 
 */
package org.springmvc.test;

import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.bio.SocketConnector;
import org.mortbay.jetty.servlet.DefaultServlet;
import org.mortbay.jetty.servlet.ServletHolder;
import org.mortbay.jetty.webapp.WebAppContext;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 1 24 - 00:52:32
 */
public class StartJpaSpring
{

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		Server server = new Server();
		SocketConnector connector = new SocketConnector();
		// Set some timeout options to make debugging easier.
		connector.setMaxIdleTime(1000 * 60 * 60);
		connector.setSoLingerTime(-1);
		connector.setPort(8383);
		server.setConnectors(new Connector[] { connector });

		WebAppContext bb = new WebAppContext();
		bb.setServer(server);
		bb.setContextPath("/spring-jpa");
		//bb.setResourceBase("spring-mvc-jpa/spring-mvc-web/src/main/webapp");
		bb.setWar("spring-mvc-jpa/spring-mvc-web/src/main/webapp");

		DefaultServlet defaultServlet = new DefaultServlet();
		ServletHolder holder = new ServletHolder(defaultServlet);
		holder.setInitParameter("useFileMappedBuffer", "false");
		bb.addServlet(holder, "/");

		server.addHandler(bb);

		try {
			System.out.println(">>> STARTING EMBEDDED JETTY SERVER, PRESS ANY KEY TO STOP");
			server.start();
			while (System.in.available() == 0) {
				Thread.sleep(5000);
			}
			server.stop();
			server.join();
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(100);
		}

	}

}
