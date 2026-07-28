package componentes

import (
	c "editor-sqlite/compartido"
	t "editor-sqlite/tipos"
)

func DefaultComponentes(estado *c.Estado) map[t.ComponenteId]t.Componente {
	return map[t.ComponenteId]t.Componente{
		t.CI_NOTIFICACIONES: newNotificaciones(),
		t.CI_COMMAND_PALETTE: newCommandPalette(
			t.CI_COMMAND_PALETTE, estado,
		),
	}
}
