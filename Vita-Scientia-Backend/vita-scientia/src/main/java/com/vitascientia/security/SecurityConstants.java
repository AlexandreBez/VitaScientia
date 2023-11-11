package com.vitascientia.security;

/**
 * Class SecurityConstants para auxiliar em valores fixos em configuraçoes.
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public class SecurityConstants {
    
    /** A Constante SECRET_KEY. */
    public static final String SECRET_KEY = "bQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E("; //Your secret should always be strong (uppercase, lowercase, numbers, symbols) so that nobody can potentially decode the signature.
    
    /** A Constante BEARER. */
    public static final String BEARER = "Bearer "; // Authorization : "Bearer " + Token 
    
    /** A Constante AUTHORIZATION. */
    public static final String AUTHORIZATION = "Authorization"; // "Authorization" : Bearer Token
    
    /** A Constante REGISTER_PATH. */
    public static final String REGISTER_PATH = "/user/register"; // Public path that clients can use to register.
}
