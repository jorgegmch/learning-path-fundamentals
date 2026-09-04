package com.grupoc4.demorestmetodos.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.grupoc4.demorestmetodos.entities.Articulo;

@Repository
public interface ArticuloRepository {

    public List<Articulo> findAllArticulos();
    public Articulo findByIdArticulo(Long id);
    public Articulo addArticulo(Long id, String nombre, Double valor);
    public Boolean deleteArticuloById(Long id);
    public Articulo modifyArticulo(Long id, String nombre, Double valor);

}
