package com.biblioteca.demolibrojpa.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.biblioteca.demolibrojpa.entities.Libro;
import com.biblioteca.demolibrojpa.repositories.LibroRepository;

@Service
public class LibroService {
    private final LibroRepository libroRepository;

    LibroService(LibroRepository libroRepository) {
        this.libroRepository = libroRepository;
    }

    /* CRUD = C */
    public Libro addLibro(String titulo, String autor, String isbn, String genero, Integer ejemplaresDisponibles) {
        if(titulo == null || titulo.trim().isEmpty()) {
            throw new IllegalArgumentException("El titulo del libro es obligatorio");
        }

        if(autor == null || autor.trim().isEmpty()) {
            throw new IllegalArgumentException("El autor del libro es obligatorio");
        }

        if(isbn == null || isbn.trim().isEmpty()) {
            throw new IllegalArgumentException("El ISBN del libro es obligatorio");
        }

        if(genero == null || genero.trim().isEmpty()) {
            throw new IllegalArgumentException("El género del libro es obligatorio");
        }

        if(ejemplaresDisponibles == null || ejemplaresDisponibles < 0) {
            throw new IllegalArgumentException("La cantidad disponibles de los ejemplares debe ser mayor a cero");
        }

        return libroRepository.save(new Libro(null, titulo.toUpperCase(), autor.toUpperCase(), isbn.toUpperCase(), genero.toUpperCase(), ejemplaresDisponibles));
    }

    /* CRUD =  R */
    public List<Libro> findAllLibro() {
        return libroRepository.findAll();
    }

    public Libro findByIdLibro(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("El ID del libro debe ser mayor a cero");
        }

        return libroRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("No existe un libro con id: " + id));
    }

    public Boolean deleteLibroById(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("El ID del libro debe ser mayor a cero");
        }

        if(!libroRepository.existsById(id)) {
            throw new IllegalArgumentException("No existe un libro con id: " + id);
        }

        libroRepository.deleteById(id);
        return !libroRepository.existsById(id);
    }

    public Libro modifyLibro(Long id, String titulo, String autor, String isbn, String genero, Integer ejemplaresDisponibles) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("El ID del libro debe ser mayor a cero");
        }

        if(titulo == null || titulo.trim().isEmpty()) {
            throw new IllegalArgumentException("El titulo del libro es obligatorio");
        }

        if(autor == null || autor.trim().isEmpty()) {
            throw new IllegalArgumentException("El autor del libro es obligatorio");
        }

        if(isbn == null || isbn.trim().isEmpty()) {
            throw new IllegalArgumentException("El ISBN del libro es obligatorio");
        }

        if(genero == null || genero.trim().isEmpty()) {
            throw new IllegalArgumentException("El género del libro es obligatorio");
        }

        if(ejemplaresDisponibles == null || ejemplaresDisponibles < 0) {
            throw new IllegalArgumentException("La cantidad disponibles de los ejemplares debe ser mayor a cero");
        }

        Libro libro = libroRepository
            .findById(id)
            .orElseThrow(() -> new IllegalArgumentException("No existe un libro con id: " + id));

        libro.setTitulo(titulo.toUpperCase());
        libro.setAutor(autor.toUpperCase());
        libro.setIsbn(isbn.toUpperCase());
        libro.setGenero(genero.toUpperCase());
        libro.setEjemplaresDisponibles(ejemplaresDisponibles);
        
        return libroRepository.save(libro);
    }

}
