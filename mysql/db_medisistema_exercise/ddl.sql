CREATE DATABASE IF NOT EXISTS db_medisistema;

USE db_medisistema;

CREATE TABLE IF NOT EXISTS tipo_empleado (
    id_tipo_empleado INT AUTO_INCREMENT PRIMARY KEY,
    tipo_empleado ENUM('medico', 'enfermera', 'administrativo')
);

CREATE TABLE IF NOT EXISTS tipo_medico (
    id_tipo_medico INT AUTO_INCREMENT PRIMARY KEY,
    tipo_medico ENUM('titular', 'interino', 'sustituto') NOT NULL
);

CREATE TABLE IF NOT EXISTS especialidades (
    id_espec INT AUTO_INCREMENT PRIMARY KEY,
    nombre_espec VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS empleados (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    tipo_empleado_fk INT,
    fecha_contratacion DATE NOT NULL,
    FOREIGN KEY(tipo_empleado_fk) REFERENCES tipo_empleado(id_tipo_empleado)
);

CREATE TABLE IF NOT EXISTS medicos (
    id_medico INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado_fk INT NOT NULL UNIQUE,
    documento VARCHAR(20) NOT NULL UNIQUE,
    tipo_medico_fk INT,
    especialidad_fk INT,
    FOREIGN KEY(id_empleado_fk) REFERENCES empleados(id_empleado),
    FOREIGN KEY(tipo_medico_fk) REFERENCES tipo_medico(id_tipo_medico),
    FOREIGN KEY(especialidad_fk) REFERENCES especialidades(id_espec)
);

CREATE TABLE IF NOT EXISTS pacientes (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    documento_cc VARCHAR(50) UNIQUE NOT NULL,
    fecha_nacimiento DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS consultas_medicas (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    id_medico_fk INT,
    id_paciente_fk INT,
    fecha_consulta ENUM('lunes', 'martes', 'miercoles', 'jueves', 'viernes'),
    hora_inicio TIME,
    hora_fin TIME,
    FOREIGN KEY (id_medico_fk) REFERENCES medicos(id_medico),
    FOREIGN KEY (id_paciente_fk) REFERENCES pacientes(id_paciente)
);

CREATE TABLE IF NOT EXISTS medico_paciente (
    id_asignacion INT AUTO_INCREMENT PRIMARY KEY,
    id_medico_fk INT,
    id_paciente_fk INT,
    fecha_asignacion DATE,
    FOREIGN KEY(id_medico_fk) REFERENCES medicos(id_medico),
    FOREIGN KEY (id_paciente_fk) REFERENCES pacientes(id_paciente)
);

CREATE TABLE IF NOT EXISTS sustituto (
    id_sustituto INT AUTO_INCREMENT PRIMARY KEY,
    id_medico_sust INT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado_sust ENUM('activa', 'finalizada') NOT NULL,
    FOREIGN KEY (id_medico_sust) REFERENCES medicos(id_medico)
);

CREATE TABLE IF NOT EXISTS vacaciones (
    id_vacaciones INT AUTO_INCREMENT PRIMARY KEY,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    dias_totales INT NOT NULL,
    id_empleado_fk INT,
    estado ENUM('planificadas', 'disfrutadas'),
    FOREIGN KEY(id_empleado_fk) REFERENCES empleados(id_empleado)
);