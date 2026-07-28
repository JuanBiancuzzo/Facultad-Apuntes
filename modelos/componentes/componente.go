package componentes

import (
	c "editor-sqlite/compartido"
	t "editor-sqlite/tipos"
)

func DefaultComponentes(_ *c.Estado) map[t.ComponenteId]t.Componente {
	return map[t.ComponenteId]t.Componente{
		t.CI_NOTIFICACIONES: newNotificaciones(),
	}
}
