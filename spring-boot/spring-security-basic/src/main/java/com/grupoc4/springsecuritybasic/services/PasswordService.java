package com.grupoc4.springsecuritybasic.services;


import org.apache.commons.codec.digest.DigestUtils;

import lombok.Data;

/**
 * PasswordService
 */
@Data
public class PasswordService {
    public static String enconder(String password) {
        return DigestUtils.sha256Hex(password);
    }
}
