package com.grupoc4.springsecuritybasic.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DatosController {

    @GetMapping("/datos")
    public ResponseEntity<Map<String, String>> getDatos() {
        Map<String, String> datos = new HashMap<>();
        datos.put("empresa", "Campus Lands");
        datos.put("grupo", "C4");
        return ResponseEntity.ok(datos);
    }

}
