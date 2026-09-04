package com.farmacia.practicafarmacia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.farmacia.practicafarmacia.entity.Categoria;
import com.farmacia.practicafarmacia.entity.Medicamento;

@Repository
public interface MedicamentoRepository extends JpaRepository<Medicamento, Long>{
    List<Medicamento> findByCategoria(Categoria categoria);
}
