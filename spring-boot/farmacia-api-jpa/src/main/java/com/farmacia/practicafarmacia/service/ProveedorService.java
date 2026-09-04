package com.farmacia.practicafarmacia.service;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.farmacia.practicafarmacia.entity.Proveedor;
import com.farmacia.practicafarmacia.repository.ProveedorRepository;

@Service
public class ProveedorService {
    private final ProveedorRepository proveedorRepository;

    public ProveedorService(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    public Proveedor crear(Proveedor proveedor) {
        if (proveedor == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Proveedor no puede ser nulo");
        }
        return proveedorRepository.save(proveedor);
    }

    public Proveedor buscarPorId(Long id) {
        Proveedor proveedor = proveedorRepository.findById(id).orElse(null);
        if (proveedor == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Proveedor no encontrado");
        }
        return proveedor;
    }
}
