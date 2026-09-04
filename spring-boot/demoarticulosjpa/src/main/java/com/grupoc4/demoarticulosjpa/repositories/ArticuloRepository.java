package com.grupoc4.demoarticulosjpa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grupoc4.demoarticulosjpa.entities.Articulo;

public interface ArticuloRepository extends JpaRepository<Articulo, Long> {
    
}
