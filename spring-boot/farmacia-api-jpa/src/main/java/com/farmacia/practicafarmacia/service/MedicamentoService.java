package com.farmacia.practicafarmacia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.farmacia.practicafarmacia.entity.Categoria;
import com.farmacia.practicafarmacia.entity.Medicamento;
import com.farmacia.practicafarmacia.entity.Proveedor;
import com.farmacia.practicafarmacia.repository.CategoriaRepository;
import com.farmacia.practicafarmacia.repository.MedicamentoRepository;
import com.farmacia.practicafarmacia.repository.ProveedorRepository;

@Service
public class MedicamentoService {
    private final MedicamentoRepository medicamentoRepository;
    private final CategoriaRepository categoriaRepository;
    private final ProveedorRepository proveedorRepository;

    public MedicamentoService(MedicamentoRepository medicamentoRepository,
            CategoriaRepository categoriaRepository,
            ProveedorRepository proveedorRepository) {
        this.medicamentoRepository = medicamentoRepository;
        this.categoriaRepository = categoriaRepository;
        this.proveedorRepository = proveedorRepository;
    }

    public Medicamento crear(Medicamento medicamento) {
        if (medicamento == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Medicamento no puede ser nulo");
        }
        return medicamentoRepository.save(medicamento);
    }

    public List<Medicamento> listar() {
        return medicamentoRepository.findAll();
    }

    public Medicamento buscarPorId(Long id) {
        Medicamento medicamento = medicamentoRepository.findById(id).orElse(null);
        if (medicamento == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Medicamento no encontrado");
        }
        return medicamento;
    }

    public Medicamento asignarCategoria(Long idMedicamento, Long idCategoria) {
        Medicamento medicamento = buscarPorId(idMedicamento);

        Categoria categoria = categoriaRepository.findById(idCategoria).orElse(null);
        if (categoria == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria no encontrada");
        }

        medicamento.setCategoria(categoria);
        return medicamentoRepository.save(medicamento);
    }

    public Medicamento asignarProveedor(Long idMedicamento, Long idProveedor) {
        Medicamento medicamento = buscarPorId(idMedicamento);

        Proveedor proveedor = proveedorRepository.findById(idProveedor).orElse(null);
        if (proveedor == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Proveedor no encontrado");
        }

        medicamento.getProveedores().add(proveedor);
        return medicamentoRepository.save(medicamento);
    }

    public List<Medicamento> listarPorCategoria(Long idCategoria) {
        Categoria categoria = categoriaRepository.findById(idCategoria).orElse(null);
        if (categoria == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria no encontrada");
        }
        return medicamentoRepository.findByCategoria(categoria);
    }
}
