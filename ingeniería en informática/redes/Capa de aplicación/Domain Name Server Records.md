---
dia: 2024-05-29
aliases:
  - DNS Records
  - RR
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-aplicación
  - carrera/ingeniería-en-informática/redes/Capa-de-aplicación
  - nota/facultad
vinculoFacultad:
  - tema: Capa de aplicación
    capitulo: 2
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
Los servidores [[Domain Name System|DNS]] almacenan resource records (RR). Estos tienen la siguiente estructura $$ (\text{Name}, \text{Value}, \text{Type}, \text{TTL}) $$
Donde TTL representa el tiempo de vida del recurso, cuando debería ser removido del [[ingeniería en informática/sisop/Scheduling/Cache|cache]]. El significado de name y value dependerá del type
* Type A
	* Entonces, name es el hostname, y value es la [[Internet Protocol Address|dirección IP]]
* Type NS
	* Entonces, name es el dominio, y value es el hostname de los servidores que sabe encontrar la dirección IP buscada
* Type CNAME
	* Entonces, value es el hostname canónico para el host con alias name
* Type MX
	* Entonces value el nombre canónico para el mail server con alias name