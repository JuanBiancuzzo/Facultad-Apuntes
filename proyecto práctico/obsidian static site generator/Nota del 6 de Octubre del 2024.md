---
dia: 2024-10-06
tags:
  - nota/proyecto
  - proyecto-práctico/obsidian-static-site-generator
---
# Progreso
---
Noté que hacer un [[Parser|parser]] no es tan simple, y por lo menos necesito más práctica de lo que tengo actualmente. Por otro lado me sentí estancado en la situación de como lo estoy tratando de resolver, por lo que voy a optar por separar el problema en el siguiente flujo
* Generar un archivo simplificado del archivo de [[Markdown|markdown]] 
    * Reconocer el header o frontmatter y separarlo
    * Iterar el archivo parseandolo usando la [[ingeniería en informática/algo 1/Lenguaje C/Biblioteca|biblioteca]] `marko` hasta encontrar una parte de [[Lenguaje de marcado de hipertexto|HTML]] y parsearlo de forma simple, y después complicarlo si es necesario, y después seguir usando `marko` para todo lo demás
* Usarlo para modificarlo dependiendo del plugin que quiera usarse
* Hacer plugins generales que serían modificar 