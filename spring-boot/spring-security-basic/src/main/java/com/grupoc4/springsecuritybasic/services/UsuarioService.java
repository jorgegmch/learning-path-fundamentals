package com.grupoc4.springsecuritybasic.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupoc4.springsecuritybasic.repositories.UsuarioRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public boolean autenticar(String username, String password) {
        String passCode = PasswordService.enconder(password);

        boolean encontroUsername = usuarioRepository
            .findByUsername(username)
            .filter(usu -> usu.getPassword().equals(passCode))
            .isPresent();

        System.out.println("\n\nEncontro usuario en bd: " + encontroUsername);

        return encontroUsername;
    }
}