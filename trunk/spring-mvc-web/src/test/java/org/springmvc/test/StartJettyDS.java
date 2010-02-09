/**
 * 
 */
package org.springmvc.test;

//import org.apache.commons.dbcp.BasicDataSource;
import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.bio.SocketConnector;
//import org.mortbay.jetty.plus.naming.Resource;
import org.mortbay.jetty.webapp.WebAppContext;

/**
 * @author Emmanuel Nollase - emanux
 * @created 2010 2 3 - 11:02:42
 */
public class StartJettyDS
{

	public static void main(String[] args)
	{
		Server server = new Server();
		SocketConnector connector = new SocketConnector();
		// Set some timeout options to make debugging easier.
		connector.setMaxIdleTime(1000 * 60 * 60);
		connector.setSoLingerTime(-1);
		connector.setPort(8080);
		server.setConnectors(new Connector[] { connector });

		WebAppContext bb = new WebAppContext();
		bb.setServer(server);
		bb.setContextPath("/swiftstar");
		bb.setWar("src/main/webapp");
		
		/*BasicDataSource ds = new BasicDataSource();
		ds.setUsername("admin");
		ds.setPassword("admin");
		ds.setUrl("jdbc:postgresql://localhost/swiftstar");
		ds.setDriverClassName("org.postgresql.Driver");
		bb.setConfigurationClasses(new String[] {
                // All except org.mortbay.jetty.plus.webapp.EnvConfiguration are
                //  default. We need to add org.mortbay.jetty.plus.webapp.EnvConfiguration
                //  to register resource-ref entries
                "org.mortbay.jetty.webapp.WebInfConfiguration",
                "org.mortbay.jetty.plus.webapp.EnvConfiguration",
                "org.mortbay.jetty.plus.webapp.Configuration",
                "org.mortbay.jetty.webapp.JettyWebXmlConfiguration",
                "org.mortbay.jetty.webapp.TagLibConfiguration"
                });
		 try {
	            //NamingEntry.setScope(NamingEntry.);
	            new Resource("jdbc/swiftstar_ds", ds);
	           // server.start();
	        } catch (Exception e) {
	            throw new RuntimeException("Jetty startup problems", e);
	        }*/

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
