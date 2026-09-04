package com.grupoc4.demorestmetodos.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.grupoc4.demorestmetodos.entities.Articulo;
import com.grupoc4.demorestmetodos.repositories.ArticuloRepositoryImpl;

@Service
public class ArticuloService {
    private final ArticuloRepositoryImpl articuloRepo;

    ArticuloService(ArticuloRepositoryImpl articuloRepo) {
        this.articuloRepo = articuloRepo;
    }

    public List<Articulo> findAllArticulos() {
        return articuloRepo.findAllArticulos();
    }

    public Articulo findByIdArticulo(Long id) {
        if (id != null && id > 0) {
            return articuloRepo.findByIdArticulo(id);
        }

        return null;
    }

    public Articulo addArticulo(Long id, String nombre, Double valor) {
        if (id != null && id > 0 &&
            nombre != null && !nombre.isEmpty() &&
            valor != null && valor > 0) {
            return articuloRepo.addArticulo(id, nombre.trim().toUpperCase(), valor);
        }

        return null;
    }

    public Boolean deleteArticuloById(Long id) {
        if (id != null && id > 0) {
            return articuloRepo.deleteArticuloById(id);
        }

        return false;
    }

    public Articulo modifyArticulo(Long id, String nombre, Double valor) {
        if (id != null && id > 0 &&
            nombre != null && !nombre.isEmpty() &&
            valor != null && valor > 0) {
            return articuloRepo.modifyArticulo(id, nombre.trim().toUpperCase(), valor);
        }

        return null;
    }
}