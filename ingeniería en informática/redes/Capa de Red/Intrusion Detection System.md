---
dia: 2024-08-01
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
aliases:
  - IDS
vinculoFacultad:
  - tema: Capa de Red
    capitulo: 4
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
Un IDS es un mecanismo popular de defensa contra ataques de [[Paquete|paquetes]] maliciosos como lo puede ser también los [[Firewall|firewalls]]. Estos usualmente está situado en el borde de la [[Red|red]] e inspecciona profundamente los paquetes, examinando no solo los headers sino el payload. Utiliza una [[Base de datos|base de datos]] de paquetes que pueden formar parte de un ataque, esta base de datos se actualiza automáticamente a medida que paquetes son descubiertos. Si se encuentra una coincidencia, se crea una alerta. Un [[Intrusion Prevention System (IPS)|IPS]] es similar, ya que además de crear alertas, bloquea los paquetes