---
dia: 2025-03-04
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un [[Vector|vector]] de [[Reloj lógico|relojes]] es el mapeo de todo estado del [[Sistema distribuido|sistema]] compuesto por $k$ [[Proceso|procesos]], con un vector de $k$ [[Números Naturales|números naturales]] y garantiza $$ \forall s,~ t \in S : s \to t \iff s.v < t.v $$ donde $s.v$ y $t.v$ son los vectores de $k$ componentes para los estados $s$ y $t$ respectivamente

Su [[Relación de orden|relación de orden]] está dada por $$ s.v < t.v \iff \forall k : s.v[k] \le t.v[k] \land \exists j : s.v[j] < t.v[j] $$ es decir, todos los componentes son menores o iguales, y al menos uno es estrictamente menor

```
struct Proceso ::
    id: UInteger
    clocks: Integer[] = [0] * k
end

function EnviarMensaje :: proceso: Proceso, mensaje: Mensaje then
    proceso.clocks[proceso.id] += 1
    Enviar mensaje, proceso.clocks
end

function RecibirMensaje :: 
    proceso: Proceso, 
    mensaje: Mensaje, 
    marcasTemporales: Integer[]
then
    for i in 0..k then
        proceso.clocks[j] = Max marcasTemporales[j], proceso.clocks[j]
    end
    
    proceso.clocks[proceso.id] += 1
end
```  

### Ejemplo
---
![[Vector de relojes lógicos.png]]

