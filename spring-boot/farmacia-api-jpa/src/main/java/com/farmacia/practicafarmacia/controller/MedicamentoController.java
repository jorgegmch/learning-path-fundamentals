package com.farmacia.practicafarmacia.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.farmacia.practicafarmacia.entity.Medicamento;
import com.farmacia.practicafarmacia.service.MedicamentoService;

@RestController
@RequestMapping("/medicamentos")
public class MedicamentoController {
    private final MedicamentoService medicamentoService;

    public MedicamentoController(MedicamentoService medicamentoService) {
        this.medicamentoService = medicamentoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Medicamento crear(@RequestBody Medicamento medicamento) {
        return medicamentoService.crear(medicamento);
    }

    @GetMapping
    public List<Medicamento> listar() {
        return medicamentoService.listar();
    }

    @PutMapping("/{id}/categoria/{idCategoria}")
    public Medicamento asignarCategoria(@PathVariable Long id, @PathVariable Long idCategoria) {
        return medicamentoService.asignarCategoria(id, idCategoria);
    }

    @PutMapping("/{id}/proveedores/{idProveedor}")
    public Medicamento asignarProveedor(@PathVariable Long id, @PathVariable Long idProveedor) {
        return medicamentoService.asignarProveedor(id, idProveedor);
    }
}
