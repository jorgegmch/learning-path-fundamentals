package com.farmacia.practicafarmacia.service;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.farmacia.practicafarmacia.entity.Categoria;
import com.farmacia.practicafarmacia.repository.CategoriaRepository;

@Service
public class CategoriaService {
     private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public Categoria crear(Categoria categoria) {
        if (categoria == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Categoria no puede ser nula");
        }
        return categoriaRepository.save(categoria);
    }

    public Categoria buscarPorId(Long id) {
        Categoria categoria = categoriaRepository.findById(id).orElse(null);
        if (categoria == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria no encontrada");
        }
        return categoria;
    }
}
