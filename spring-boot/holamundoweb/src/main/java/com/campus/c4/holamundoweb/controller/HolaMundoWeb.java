package com.campus.c4.holamundoweb.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HolaMundoWeb {
    @GetMapping("/mensaje")
    public String mensaje() {
        return "Hola Mundo Web C4";
    }
}