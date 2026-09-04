package com.grupoc4.demorestmetodos.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.grupoc4.demorestmetodos.entities.Articulo;

@Repository
public class ArticuloRepositoryImpl implements ArticuloRepository {

    private List<Articulo> lista = new ArrayList<>();

    @Override
    public List<Articulo> findAllArticulos() {
        return lista;
    }

    @Override
    public Articulo findByIdArticulo(Long id) {
        for(Articulo articulo : lista)
            if (articulo.getId() == id)
                return articulo;

        return null;
    }

    @Override
    public Articulo addArticulo(Long id, String nombre, Double valor) {
        Articulo articulo = new Articulo(id, nombre, valor);
        lista.add(articulo);
        return articulo;
    }

    @Override
    public Boolean deleteArticuloById(Long id) {
        Articulo articulo = findByIdArticulo(id);
        if (articulo != null) {
            lista.remove(articulo);
            return true;
        }

        return false;
    }

    @Override
    public Articulo modifyArticulo(Long id, String nombre, Double valor) {
        Articulo articulo = findByIdArticulo(id);
        if (articulo != null) {
            articulo.setNombre(nombre);
            articulo.setValor(valor);
            return articulo;
        }

        return null;
    }

}
