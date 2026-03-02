---
dia: 2023-10-19
tags:
  - carrera/ingeniería-en-informática/ingenieria-software-1/Analizar-y-especificar-requisitos
  - nota/facultad
vinculoFacultad:
  - tema: Analizar y especificar requisitos
    capitulo: 4
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Agarramos el [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Formato de caso de uso de dos columnas|formato de dos columnas]] y agregamos precondiciones, postcondiciones y [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Escenario|escenarios]] alternativos. También es usual incluir una sección para describir los [[ingeniería en informática/ingenieria de software 1/Ingeniería de requisitos/Requisito|requisitos]] no funcionales vinculados al caso de uso

# Ejemplo
---
#### Agregar producto a un pedido de compra
El cliente agrega un producto a su pedido de compra

#### Precondiciones
El cliente ya consultó los detalles del producto

| [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Actor]]                                             | [[Sistema]]                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Ingresa el código de producto que desea y la cantidad |                                                                        |
|                                                       | Informa la descripción, el precio por unidad, el precio total del ítem |

#### Postcondiciones
El producto y la cantidad de unidades ingresadas han sido agregadas al pedido de compra

#### [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Escenario|Escenarios]] alternativos
Si no hay stock del producto ingresado, el [[Sistema]] informa "No hay actualmente unidades disponibles del producto seleccionado. La entrega este producto podrá verse demorada"
