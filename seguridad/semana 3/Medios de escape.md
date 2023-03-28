---
dia: 2023-03-28
materia: seguridad
capitulo: 3
---
### Definición
---
Medio de salida que constituye la línea natural de escape (tránsito). Tiene como objetivo garantizar una evacuación rápida y segura.

Para el calculo de número de salidas y ancho mínimo de los medios de escape denenden del factor de ocupación que notaremos como $F_o$ con unidades de ($m^2/\text{persona}$) y la superficie del [[Sector de incendio|sector]] con unidades de ($m^2$).

##### Factor de ocupación
| Uso                                                                                                                | $X$ en $m^2$ |
| ------------------------------------------------------------------------------------------------------------------ | ------------ |
| Sitios de asambleas, auditorios, salas de concienrtos, salas de baile                                              | 1            |
| Eficicios educacionales, templos                                                                                   | 2            |
| Lugares de trabajo, locales, patios y terrazas destinados a comercio, mercados, ferias, exposiciones, restaurantes | 3            |
| Salones de billares, canchas de bolos y bochas, gimnasios, pistas de patinaje, refugios nocturnos de caridad       | 5            |
| Edifícios de escritorios y oficinas, bancos, bibliotecas, clínicas, asilos, internados, casa de baile              | 8            |
| Viviendas privadas y colectivas                                                                                    | 12           |
| Edificios industriales: el número de ocupantes será declarado por el propietario                                   | 16           |
| Salas de juego                                                                                                     | 2            |
| Grandes tiendas, supermercados, planta baja y 1er subsuelo                                                         | 3            |
| Grandes tiendas, supermercados, pisos superiores                                                                   | 8            |
| Hoteles, planta baja y restaurantes                                                                                | 3            |
| Hoteles, pisos superiores                                                                                          | 20           |
| Depócitos                                                                                                          | 20             |

El número total de personas a ser evacuadas se calcula como 
$$ N = \frac{S}{F_o} $$
Donde se calcula la superficie como
$$ S = S_\text{total} - S_\text{sanitaria} - L \cdot ne $$
Con $L$ siendo el largo del camino más largo.

La unidad de ancho de salida, denotada como $n$ se calcula como 
$$ n = \frac{N}{100} $$

Donde el mínimo debe ser:
| Unidades de salida | Edificios nuevos | Edificios existentes |
| ------------------ | ---------------- | -------------------- |
| 2                  | $1,10 m$         | $0,96 m$             |
| 3                  | $1,55 m$         | $1,45 m$             |
| 4                  | $2,00 m$         | $1,85 m$             |
| 5                  | $2,10 m$         | $2,30 m$             |
| 6                  | $2,90 m$         | $2,80 m$             |
