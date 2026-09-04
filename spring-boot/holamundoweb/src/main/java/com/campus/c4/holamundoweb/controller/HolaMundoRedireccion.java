package com.campus.c4.holamundoweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HolaMundoRedireccion {
    @GetMapping("/inicio")
    public String irInicio() {
        return "redirect:/";
    }

    @GetMapping("/saludo")
    public String irSaludo() {
        return "saludo.html";
    }
}