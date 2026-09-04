package com.biblioteca.demolibrojpa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.biblioteca.demolibrojpa.entities.Libro;


public interface LibroRepository extends JpaRepository<Libro, Long> {
    
}
