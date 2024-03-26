---
dia: 2023-04-03
materia: orga
capitulo: 4
---
### Definición
---
Dado un [[Mensaje]], cuanta información útil estoy dando. La cantidad de bit's necesarios para ser eficiente, cumple esta formula
$$ bits = - \log_2(P) $$
Donde $P$ es la [[Calculo de probabilidad|probabilidad]] de que ocurra lo que estamos mandando.

La logica es que cuando un evento es muy probable que ocurra, queremos optimizar la cantidad de bits que mandemos, mientras que para los eventos muy improbables mandaremos más bits ya que estamos mandando más [[Información]].

Por ejemplo, digamos que tenemos una moneda cargada, dando una probabilidad de $0.75$ de caer en cara. Por lo tanto como es más común no nos conviene mandar muchos bits, por eso $-log_2(0.75) = 0.415037~bits$, mientras que para ceca como tiene $0.25$ de probabilidad se tiene que enviar con mayor información $-log_2(0.25)=2~bits$.