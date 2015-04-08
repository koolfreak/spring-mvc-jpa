package org.org.springmvc.util;

import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.session.InvalidSessionStrategy;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by enollase on 4/7/2015.
 */
public class TimeoutRedirectStrategy implements InvalidSessionStrategy {

    private final String destinationUrl;
    private final RedirectStrategy redirectStrategy;

    public TimeoutRedirectStrategy(String destinationUrl, RedirectStrategy redirectStrategy){
        this.destinationUrl = destinationUrl;
        this.redirectStrategy = redirectStrategy;
    }

    @Override
    public void onInvalidSessionDetected(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        redirectStrategy.sendRedirect(request, response, destinationUrl);
    }
}
