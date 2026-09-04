package com.farmacia.practicafarmacia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.farmacia.practicafarmacia.entity.Proveedor;

@Repository
public interface ProveedorRepository extends JpaRepository<Proveedor, Long>{

}
