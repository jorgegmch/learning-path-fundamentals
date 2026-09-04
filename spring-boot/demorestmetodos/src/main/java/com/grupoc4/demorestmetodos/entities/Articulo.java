package com.grupoc4.demorestmetodos.entities;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Articulo {
    private Long id;
    private String nombre;
    private Double valor;
}
