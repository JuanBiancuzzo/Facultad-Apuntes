---
dia: 2023-04-11
tags:
  - seguridad/Estrés-termico
  - nota
---
### Definición
---
El la combinación lineal de la [[Temperatura del bulbo húmedo natural]] (tbhn), [[Temperatura de globo]] (tg) y la [[Temperatura del bulbo seco]] (tbs).

En ambientes exteriores con carga solar, se define como: $$ TGBH = 0.7 \cdot tbhn + 0.2 \cdot tg + 0.1 \cdot tbs $$
En ambientes exteriores o interiores sin carga solar, se define como: $$ TGBH = 0.7 \cdot tbhn + 0.3 \cdot tg $$
#### Ponderación
---
Si los trabajadores realizan actividades en varios sectores, se calculará el TGBH d cada sector y con éstos, el TGBH ponderado se calcula como: $$ TGBH_{ponderado} = \frac{1}{\sum t_i} \cdot \sum TGBH_i \cdot t_i $$
Donde $TGBH_i$ es el TGBH en el sector $i$, y el $t_i$ es el tiempo de exposición en el sector $i$.


#### Adiciones por el tipo de ropa
| Tipo de ropa                    | Adición al TGBH |
| ------------------------------- | --------------- |
| Uniforme de trabajo de verano   | $+~0$             |
| Buzos de tela (material tejido) | $+~3.5$           |
| Buzos de doble tela             | $+~5$             |

No adicionarse en el caso de ser un trabje hermético.