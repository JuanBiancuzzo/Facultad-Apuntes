---
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
materia: <% await tp.system.suggester(["Taller de programación", "Organización de datos", "Estructura del computador", "Seguridad ambiental y del trabajo", "Algebra 2", "Análisis 2", "Análisis 3", "Fisica 2", "Fisica 3", "Introducción a la electronica", "Análisis númerico", "Probabilidad"], ["taller", "orga", "estructura", "seguridad", "algebra 2", "analisis 2", "analisis 3", "fisica 2", "fisica 3", "intro", "numerico", "proba"]) %>
capitulo: <% await tp.system.prompt("Capitulo: ") %>
---
### Definición
---
