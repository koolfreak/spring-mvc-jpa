package org.org.springmvc.util;

import java.lang.annotation.*;

/**
 * Created by enollase on 4/9/2015.
 */
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Layout {
    String value();
}
