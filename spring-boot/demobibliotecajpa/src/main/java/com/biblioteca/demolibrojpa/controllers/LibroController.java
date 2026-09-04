package com.biblioteca.demolibrojpa.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.demolibrojpa.entities.Libro;
import com.biblioteca.demolibrojpa.services.LibroService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/libros")
public class LibroController {

    private final LibroService libroService;

    LibroController(LibroService libroService) {
        this.libroService = libroService;
    }

    @GetMapping
    public List<Libro> findAllLibros() {
        return libroService.findAllLibro();
    }

    @GetMapping("/{id}")
    public Libro findByIdLibro(@PathVariable("id") Long id) {
        return libroService.findByIdLibro(id);
    }

    @PostMapping
    public Libro addLibro(@RequestBody Libro libro) {
        return libroService.addLibro(
            libro.getTitulo(),
            libro.getAutor(),
            libro.getIsbn(),
            libro.getGenero(),
            libro.getEjemplaresDisponibles()
        );
    }

    @PutMapping("/{id}")
    public Libro modifyLibro(@PathVariable("id") Long id, @RequestBody Libro libro) {
        return libroService.modifyLibro(
            id,
            libro.getTitulo(),
            libro.getAutor(),
            libro.getIsbn(),
            libro.getGenero(),
            libro.getEjemplaresDisponibles()
        );
    }

    @DeleteMapping("/{id}")
    public Boolean deleteLibro(@PathVariable("id") Long id) {
        return libroService.deleteLibroById(id);
    }
}