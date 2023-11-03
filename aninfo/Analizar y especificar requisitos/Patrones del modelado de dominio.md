---
dia: 2023-10-26
materia: aninfo
capitulo: 4
---
### Definición
---
Al crear un [[Modelado de dominio|modelo de dominio]], aparecen patrones como

#### Personas y organizaciones
---
Ambos tiene atributos comunes y otros que los diferencian. Por lo que se puede crear una [[Asociación entre objetos#Generalización y especialización|superclase]] que representa a una persona u organización, posibles sinónimos serían persona física/jurídica, tercero, etc.

También cuando hay una jerarquía podemos representarla con una clase Organización, y una [[Asociación entre objetos#Unarias|asociación unaria]] de 0..\*, y se 0..1, y un Tipo organización que permite diferenciarlas (de ser necesario) a qué tipo de unidad organizacional pertenece cada instancia de Organización. 

#### Productos y especificaciones
---
A veces es necesario separar la descripción o especificación del producto o servicio de una instancia de dicho producto o servicio en particular

#### Factura
---
Una factura es un documento que refleja la información de una operación de venta. Los sistemas administrativos necesitan mantener esta información.

#### Inventarios y contabilidad
---
Muchas veces es necesario registrar movimientos y saldos de bienes y valores. Muchas veces es necesario registrar el movimiento de valores entre cuentas, y esto quedaría representado por una transacción con dos movimientos asociados, uno para debitar de una cuenta (caja de ahorro) y otro para acreditar en la otra cuenta (la cuenta corriente)
