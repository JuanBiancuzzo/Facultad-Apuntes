package assert

import (
	"fmt"
)

func Unreachable(mensaje string, args ...any) {
	panic(fmt.Sprintf(mensaje, args...))
}

func True(condicion bool, mensaje string, args ...any) {
    if !condicion {
		panic(fmt.Sprintf(mensaje, args...))
    }
}

func False(condicion bool, mensaje string, args ...any) {
	True(!condicion, mensaje, args...)
}
