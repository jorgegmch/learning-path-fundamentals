package com.grupoc4.springsecuritybasic.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.grupoc4.springsecuritybasic.entities.Articulo;
import com.grupoc4.springsecuritybasic.repositories.ArticuloRepository;

@Service
public class ArticuloService {

    private final ArticuloRepository articuloRepository;

    public ArticuloService(ArticuloRepository articuloRepository) {
        this.articuloRepository = articuloRepository;
    }

    public List<Articulo> findAll() {
        return articuloRepository.findAll();
    }

    public Optional<Articulo> findById(Long id) {
        return articuloRepository.findById(id);
    }

    public Articulo save(Articulo articulo) {
        return articuloRepository.save(articulo);
    }

    public Articulo update(Long id, Articulo articulo) {
        Articulo existing = articuloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("ArtÃ­culo no encontrado"));

        existing.setNombre(articulo.getNombre());
        existing.setDescripcion(articulo.getDescripcion());

        return articuloRepository.save(existing);
    }

    public void deleteById(Long id) {
        articuloRepository.deleteById(id);
    }
}
