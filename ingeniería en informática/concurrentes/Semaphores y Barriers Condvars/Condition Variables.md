---
dia: 2026-10-02
etapa: empezado
referencias: []
aliases:
  - CondVar
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Semaphores-Barriers-y-Condvars
ejercicios: []
vinculoFacultad:
  - tema: Semaphores, Barriers y Condvars
    capitulo: 5
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Son una herramienta para [[ingeniería en informática/sisop/Concurrencia/Sincronización de un programa concurrente|sincronizar]] distintos procesos dado una condición, estás se podrían representar como 
* Una condición que tiene exclusión mutua, dado por un [[ingeniería en informática/sisop/Concurrencia/Lock#^lock-escritura|mutex]], llamado `condicion`, que dependiendo la la implementación tiene que volverse verdadera o falsa para desbloquear a un proceso. Tomaremos en este ejemplo que tiene que ser verdadera
* Un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] llamado `procesos`, que guarda todo proceso que quedó [[ingeniería en informática/taller/Concurrencia/Estados de un proceso#Blocked|bloqueado]] y que empieza vacio

Esta tiene $3$ operaciones 
* ```
	void wait(&cond_var) {
		cond_var.procesos.append(p); // Donde p es el proceso que lo llamó
		p.state = blocked;
	}
```

* ```
	void signal(&cond_var) {
		if (conv_var.condicion()) {
			q = conv_var.procesos.pop();
			q.state = ready;
		}
	}
```

* ```
	void breadcast(&cond_var) {
		if (conv_var.condicion()) {
			while (!conv_var.procesos.empty()) {
				q = conv_var.procesos.pop();
				q.state = ready;
			}
		}
	}
```