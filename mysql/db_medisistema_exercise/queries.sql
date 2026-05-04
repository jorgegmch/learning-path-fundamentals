USE db_medisistema;

-- 1. Número de pacientes atendidos por cada médico.
SELECT e.nombre, e.apellido, COUNT(DISTINCT c.id_paciente_fk) AS pacientes_atendidos
FROM medicos m
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
LEFT JOIN consultas_medicas c ON m.id_medico = c.id_medico_fk
GROUP BY m.id_medico, e.nombre, e.apellido;

-- 2. Total de días de vacaciones planificadas y disfrutadas por cada empleado.
SELECT e.nombre, e.apellido, v.estado, SUM(v.dias_totales) AS total_dias
FROM empleados e
JOIN vacaciones v ON e.id_empleado = v.id_empleado_fk
GROUP BY e.id_empleado, e.nombre, e.apellido, v.estado;

-- 3. Médicos con mayor cantidad de horas de consulta en la semana.
SELECT e.nombre, e.apellido, SUM(TIME_TO_SEC(TIMEDIFF(c.hora_fin, c.hora_inicio))/3600) AS total_horas
FROM medicos m
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
JOIN consultas_medicas c ON m.id_medico = c.id_medico_fk
GROUP BY m.id_medico, e.nombre, e.apellido
ORDER BY total_horas DESC;

-- 4. Número de sustituciones realizadas por cada médico sustituto.
SELECT e.nombre, e.apellido, COUNT(s.id_sustituto) AS num_sustituciones
FROM sustituto s
JOIN medicos m ON s.id_medico_sust = m.id_medico
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
GROUP BY m.id_medico, e.nombre, e.apellido;

-- 5. Número de médicos que están actualmente en sustitución.
SELECT COUNT(DISTINCT id_medico_sust) AS medicos_activos_sustitucion
FROM sustituto
WHERE estado_sust = 'activa';

-- 6. Horas totales de consulta por médico por día de la semana.
SELECT e.nombre, e.apellido, c.fecha_consulta, SUM(TIME_TO_SEC(TIMEDIFF(c.hora_fin, c.hora_inicio))/3600) AS horas
FROM medicos m
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
JOIN consultas_medicas c ON m.id_medico = c.id_medico_fk
GROUP BY m.id_medico, e.nombre, e.apellido, c.fecha_consulta;

-- 7. Médico con mayor cantidad de pacientes asignados.
SELECT e.nombre, e.apellido, COUNT(mp.id_paciente_fk) AS total_pacientes
FROM medicos m
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
JOIN medico_paciente mp ON m.id_medico = mp.id_medico_fk
GROUP BY m.id_medico, e.nombre, e.apellido
ORDER BY total_pacientes DESC LIMIT 1;

-- 8. Empleados con más de 10 días de vacaciones disfrutadas.
SELECT e.nombre, e.apellido, SUM(v.dias_totales) AS total_disfrutados
FROM empleados e
JOIN vacaciones v ON e.id_empleado = v.id_empleado_fk
WHERE v.estado = 'disfrutadas'
GROUP BY e.id_empleado, e.nombre, e.apellido
HAVING total_disfrutados > 10;

-- 9. Médicos que actualmente están realizando una sustitución.
SELECT DISTINCT e.nombre, e.apellido
FROM sustituto s
JOIN medicos m ON s.id_medico_sust = m.id_medico
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
WHERE s.estado_sust = 'activa';

-- 10. Total de días de vacaciones planificadas y disfrutadas por cada tipo de empleado.
SELECT te.tipo_empleado, v.estado, SUM(v.dias_totales) AS total_dias
FROM tipo_empleado te
JOIN empleados e ON te.id_tipo_empleado = e.tipo_empleado_fk
JOIN vacaciones v ON e.id_empleado = v.id_empleado_fk
GROUP BY te.tipo_empleado, v.estado;

-- 11. Total de pacientes por cada tipo de médico.
SELECT tm.tipo_medico, COUNT(DISTINCT mp.id_paciente_fk) AS total_pacientes
FROM tipo_medico tm
JOIN medicos m ON tm.id_tipo_medico = m.tipo_medico_fk
LEFT JOIN medico_paciente mp ON m.id_medico = mp.id_medico_fk
GROUP BY tm.tipo_medico;

-- 12. Número de sustituciones por tipo de médico.
SELECT tm.tipo_medico, COUNT(s.id_sustituto) AS num_sustituciones
FROM tipo_medico tm
JOIN medicos m ON tm.id_tipo_medico = m.tipo_medico_fk
JOIN sustituto s ON m.id_medico = s.id_medico_sust
GROUP BY tm.tipo_medico;

-- 13. Total de pacientes por médico y por especialidad.
SELECT e.nombre, e.apellido, esp.nombre_espec, COUNT(DISTINCT mp.id_paciente_fk) AS total_pacientes
FROM medicos m
JOIN empleados e ON m.id_empleado_fk = e.id_empleado
JOIN especialidades esp ON m.especialidad_fk = esp.id_espec
LEFT JOIN medico_paciente mp ON m.id_medico = mp.id_medico_fk
GROUP BY m.id_medico, e.nombre, e.apellido, esp.nombre_espec;

-- 14. Empleados y médicos con más de 20 días de vacaciones planificadas.
SELECT e.nombre, e.apellido, SUM(v.dias_totales) AS total_planificadas
FROM empleados e
JOIN vacaciones v ON e.id_empleado = v.id_empleado_fk
WHERE v.estado = 'planificadas'
GROUP BY e.id_empleado, e.nombre, e.apellido
HAVING total_planificadas > 20;

-- 15. Total de horas de consulta por especialidad y día de la semana.
SELECT esp.nombre_espec, c.fecha_consulta, SUM(TIME_TO_SEC(TIMEDIFF(c.hora_fin, c.hora_inicio))/3600) AS total_horas
FROM especialidades esp
JOIN medicos m ON esp.id_espec = m.especialidad_fk
JOIN consultas_medicas c ON m.id_medico = c.id_medico_fk
GROUP BY esp.nombre_espec, c.fecha_consulta;