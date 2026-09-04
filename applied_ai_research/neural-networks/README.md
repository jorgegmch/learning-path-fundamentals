# 🧠 Redes Neuronales Aplicadas con Python

## 📌 Descripción

Este repositorio contiene la implementación de tres modelos de redes neuronales artificiales desarrollados en Python, orientados a la resolución de problemas reales mediante aprendizaje supervisado.

El proyecto aborda:

- Modelado de relaciones lineales  
- Modelado de relaciones no lineales  
- Predicción aplicada a inteligencia de negocios  

Los modelos fueron construidos y entrenados utilizando arquitecturas feedforward con capas densas (Dense) y optimización mediante descenso de gradiente.

---

# 🎯 Objetivo del Proyecto

Demostrar la capacidad de una red neuronal artificial para:

- Aprender patrones matemáticos a partir de datos históricos
- Generalizar a nuevos datos no vistos durante el entrenamiento
- Modelar tanto funciones lineales como no lineales
- Aplicar IA en contextos empresariales reales

---

# 📊 Modelos Implementados

---

## 1️⃣ Optimización de Sistemas de Pesaje

### Problema

Automatizar la conversión entre kilogramos y libras mediante aprendizaje automático.

### Tipo de Relación

Relación lineal.

### Enfoque

Se entrenó una red neuronal utilizando datos históricos que relacionan:

kilogramos → libras

El modelo aprende la proporción constante existente entre ambas unidades y genera predicciones para nuevos valores, como por ejemplo 150 kg.

### Aplicación Real

- Logística internacional  
- Automatización de etiquetas de envío  
- Sistemas de pesaje inteligentes  

---

## 2️⃣ Modelado Geométrico de Precisión

### Problema

Estimación del área de un círculo a partir de su radio.

### Tipo de Relación

Relación no lineal (cuadrática):

A = π · r²

### Enfoque

A diferencia del ejercicio anterior, esta relación no es lineal.  
Se utilizó una arquitectura con capa oculta para permitir que la red neuronal aprenda el comportamiento cuadrático de la función.

El modelo fue evaluado comparando la predicción para un radio de 15 unidades contra el valor teórico real.

### Aplicación Real

- Software CAD  
- Simulación geométrica  
- Diseño industrial  

---

## 3️⃣ Inteligencia de Negocios y Proyección de Ventas

### Problema

Predecir el impacto de la inversión publicitaria sobre el volumen de ventas.

### Tipo de Relación

Regresión supervisada.

### Enfoque

Se entrenó un modelo utilizando datos históricos que relacionan:

Inversión en publicidad → Ventas generadas

La red neuronal identifica el patrón de retorno de inversión (ROI) y genera un pronóstico para una inversión proyectada de 85 mil dólares.

### Aplicación Real

- Business Intelligence  
- Planeación estratégica  
- Análisis predictivo  

---

# 🏗 Arquitectura General

Los modelos comparten la siguiente estructura conceptual:

1. Definición del dataset  
2. Construcción del modelo secuencial  
3. Capas densas (Dense)  
4. Función de activación  
5. Compilación del modelo  
6. Entrenamiento supervisado  
7. Evaluación  
8. Predicción  

Tecnologías utilizadas:

- Python  
- NumPy  
- TensorFlow / Keras  
- Matplotlib  
- Jupyter Notebook  

---

# 📂 Estructura del Proyecto

neural-networks/
│  
├── conversion_pesos.ipynb  
├── area_circulo.ipynb  
├── proyeccion_ventas.ipynb  
│  
└── README.md  

---

# ⚙️ Instalación

1. Descargar unicamente el directorio `neural-networks` del repositorio.

2. Instalar dependencias:

pip install -r requirements.txt

3. Ejecutar los notebooks en Jupyter o VSCode.

---

# 🧠 Conceptos Aplicados

- Aprendizaje supervisado  
- Regresión con redes neuronales  
- Modelos feedforward  
- Función de pérdida para regresión  
- Descenso de gradiente  
- Generalización de modelos  

---

# 📌 Nivel del Proyecto

Proyecto de nivel inicial-intermedio enfocado en fundamentos de Inteligencia Artificial y redes neuronales aplicadas a problemas prácticos.

---

# 👨‍💻 Autor

[Jorge Gomez - jorgegmch](https://github.com/jorgegmch)
