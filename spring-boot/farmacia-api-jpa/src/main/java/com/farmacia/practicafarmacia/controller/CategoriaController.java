package com.farmacia.practicafarmacia.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.farmacia.practicafarmacia.entity.Categoria;
import com.farmacia.practicafarmacia.entity.Medicamento;
import com.farmacia.practicafarmacia.service.CategoriaService;
import com.farmacia.practicafarmacia.service.MedicamentoService;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    private final CategoriaService categoriaService;
    private final MedicamentoService medicamentoService;

    public CategoriaController(CategoriaService categoriaService, MedicamentoService medicamentoService) {
        this.categoriaService = categoriaService;
        this.medicamentoService = medicamentoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Categoria crear(@RequestBody Categoria categoria) {
        return categoriaService.crear(categoria);
    }

    @GetMapping("/{id}/medicamentos")
    public List<Medicamento> listarMedicamentosPorCategoria(@PathVariable Long id) {
        return medicamentoService.listarPorCategoria(id);
    }
}
