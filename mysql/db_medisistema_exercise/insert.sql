USE db_medisistema;

INSERT INTO tipo_empleado (tipo_empleado) VALUES
('medico'),
('enfermera'),
('administrativo');

INSERT INTO tipo_medico (tipo_medico) VALUES
('titular'),
('interino'),
('sustituto');

INSERT INTO especialidades (nombre_espec) VALUES
('Pediatría'),
('Cardiología'),
('Dermatología'),
('Neurología'),
('Medicina General'),
('Oftalmología'),
('Reumatología'),
('Traumatología'),
('Oncología'),
('Psicología');

INSERT INTO empleados (nombre, apellido, tipo_empleado_fk, fecha_contratacion) VALUES
('Carlos', 'Ramirez', 1, '2015-01-10'), 
('Ana', 'Lopez', 1, '2018-03-15'), 
('Luis', 'Martinez', 1, '2020-01-10'),
('Marta', 'Gomez', 1, '2019-11-20'), 
('Jorge', 'Diaz', 1, '2021-05-14'), 
('Sofia', 'Ruiz', 1, '2022-08-30'),
('Pedro', 'Alvarez', 1, '2023-02-15'), 
('Lucia', 'Fernandez', 1, '2023-09-01'), 
('Raul', 'Torres', 1, '2021-07-07'),
('Carmen', 'Vega', 1, '2017-04-12'), 
('Laura', 'Castro', 2, '2016-09-21'), 
('Diego', 'Molina', 3, '2018-12-05'),
('Elena', 'Rojas', 2, '2020-03-11');

INSERT INTO medicos (id_empleado_fk, documento, tipo_medico_fk, especialidad_fk) VALUES
(1, 'DOC001', 1, 1), 
(2, 'DOC002', 1, 2), 
(3, 'DOC003', 2, 3), 
(4, 'DOC004', 1, 4), 
(5, 'DOC005', 3, 5),
(6, 'DOC006', 3, 1), 
(7, 'DOC007', 2, 2), 
(8, 'DOC008', 3, 3), 
(9, 'DOC009', 1, 4), 
(10, 'DOC010', 1, 5);

INSERT INTO pacientes (nombre, apellido, documento_cc, fecha_nacimiento) VALUES
('Alberto', 'Avelleneda', 'asd120', '1990-04-12'),
('Berta', 'Bermudez', 'asf121', '1985-09-30'),
('Carlos', 'Caceres', 'asg122', '2000-01-20'),
('Diego', 'Dangon', 'ash123', '1995-07-15'),
('Ernesto', 'Rodríguez', 'asj124', '1988-12-05'),
('Flavio', 'Do Santo', 'ask125', '1992-03-25'),
('German', 'Garmendia', 'asl126', '1998-06-18'),
('Homero', 'Hernandez', 'asz127', '1983-11-10'),
('Inés', 'Fernández', 'asx128', '1995-02-28'),
('Jorge', 'Gomez', 'asc129', '2002-08-05');

INSERT INTO consultas_medicas (id_medico_fk, id_paciente_fk, fecha_consulta, hora_inicio, hora_fin) VALUES
(1, 1, 'lunes', '08:00:00', '10:00:00'),
(2, 2, 'martes', '09:00:00', '11:00:00'),
(3, 3, 'miercoles', '08:00:00', '12:00:00'),
(4, 4, 'jueves', '14:00:00', '16:00:00'), 
(5, 5, 'viernes', '09:00:00', '11:00:00'), 
(6, 6, 'lunes', '11:00:00', '13:00:00'),
(7, 7, 'martes', '07:00:00', '10:00:00'), 
(8, 8, 'miercoles', '15:00:00', '17:00:00'), 
(9, 9, 'jueves', '08:00:00', '10:00:00'),
(10, 10, 'viernes', '16:00:00', '18:00:00');

INSERT INTO medico_paciente (id_medico_fk, id_paciente_fk, fecha_asignacion) VALUES
(1, 1, '2024-01-01'), 
(2, 2, '2024-01-05'), 
(3, 3, '2024-01-10'), 
(4, 4, '2024-01-12'), 
(5, 5, '2024-01-15'),
(6, 6, '2024-01-20'), 
(7, 7, '2024-01-22'), 
(8, 8, '2024-01-25'), 
(9, 9, '2024-01-28'), 
(10, 10, '2024-02-01');

INSERT INTO sustituto (id_medico_sust, fecha_inicio, fecha_fin, estado_sust) VALUES
(5, '2024-01-01', '2024-01-15', 'finalizada'), 
(6, '2024-02-01', '2024-02-28', 'finalizada'),
(8, '2024-03-01', '2024-03-15', 'finalizada'), 
(5, '2024-04-01', '2024-04-20', 'finalizada'),
(6, '2024-05-01', '2024-05-15', 'finalizada'), 
(8, '2024-06-01', '2024-06-30', 'finalizada'),
(5, '2024-07-01', '2024-07-15', 'finalizada'), 
(6, '2024-10-01', '2024-10-31', 'activa'),
(8, '2024-11-01', '2024-11-30', 'activa'), 
(5, '2024-12-01', '2024-12-15', 'activa');

INSERT INTO vacaciones (fecha_inicio, fecha_fin, dias_totales, id_empleado_fk, estado) VALUES
('2023-01-10', '2023-01-25', 15, 1, 'disfrutadas'), 
('2023-02-01', '2023-02-12', 11, 2, 'disfrutadas'),
('2023-03-05', '2023-03-25', 20, 3, 'disfrutadas'), 
('2024-06-01', '2024-06-25', 24, 4, 'planificadas'),
('2024-07-01', '2024-07-15', 14, 5, 'planificadas'), 
('2023-08-10', '2023-08-25', 15, 11, 'disfrutadas'),
('2024-09-01', '2024-09-22', 21, 12, 'planificadas'), 
('2023-10-05', '2023-10-20', 15, 6, 'disfrutadas'),
('2024-11-01', '2024-11-15', 14, 7, 'planificadas'), 
('2023-12-01', '2023-12-10', 9, 8, 'disfrutadas');

