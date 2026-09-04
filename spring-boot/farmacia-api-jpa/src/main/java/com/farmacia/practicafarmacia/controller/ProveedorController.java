package com.farmacia.practicafarmacia.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.farmacia.practicafarmacia.entity.Proveedor;
import com.farmacia.practicafarmacia.service.ProveedorService;

@RestController
@RequestMapping("/proveedores")
public class ProveedorController {
    private final ProveedorService proveedorService;

    public ProveedorController(ProveedorService proveedorService) {
        this.proveedorService = proveedorService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Proveedor crear(@RequestBody Proveedor proveedor) {
        return proveedorService.crear(proveedor);
    }
}
