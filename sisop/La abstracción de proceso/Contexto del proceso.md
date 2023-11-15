---
dia: 2023-11-15
materia: sisop
capitulo: 2
---
### Definición
---
Cada proceso tiene un contexto bien definido que comprende la información necesaria para describir completamente al mismo. El contexto de un proceso consiste de
1. User Address Space:
	* Normalmente está dividido en varias áreas, text, data, [[Stack]], [[Heap]]
2. Control Information:
	* El [[Kernel]] utiliza dos estructuras principales para mantener información de control de un proceso, la [[User Area]] y la [[Estructura Proc]]. Cada proceso además tiene su propio [[Stack|kernel stack]] y mapas de traducción de [[Dirección de memoria|direcciones]]
3. Credentials:
	* Las credenciales del proceso incluyen los groups IDs y user id, asociados con el
4. Variables de entorno:
	* Son un conjunto de strings del formato `clave = valor` que son heredadas del proceso padre
5. Hardware context:
	* Esto contiene el contenido de los registros de propósito general, y de un conjunto especial de registros del [[Sistema]]
		* El program counter (PC)
		* El [[Stack]] pointer (SP)
		* Memory management registers
		* Los registros de la unidad de punto flotante

En forma resumida, el contexto de un proceso consiste en la unión de [[Contexto del nivel del usuario|user-level context]] [[Contexto de los registros|register context]] y [[Contexto del nivel del sistema|system level context]].

#### Código
---
```c
// the registers xv6 will save and restore 
// to stop and subsequently restart a process 

struct context { 
	int eip; 
	int esp; 
	int ebx; 
	int ecx; 
	int edx; 
	int esi; 
	int edi; 
	int ebp; 
}; 

// the different states a process can be in 
enum proc_state { UNUSED, EMBRYO, SLEEPING, RUNNABLE, RUNNING, ZOMBIE }; 

// the information xv6 tracks about each process 
// including its register context and state 
struct proc { 
	char *mem;                  // Start of process memory 
	uint sz;                    // Size of process memory 
	char *kstack;               // Bottom of kernel stack 
	                        // for this process 
	enum proc_state state;      // Process state 
	int pid;                    // Process ID 
	struct proc *parent;        // Parent process 
	void *chan;                 // If non-zero, sleeping on 
	chan int killed;            // If non-zero, have been killed 
	struct file *ofile[NOFILE]; // Open files 
	struct inode *cwd;          // Current directory 
	struct context context;     // Switch here to run process 
	struct trapframe *tf;       // Trap frame for the 
	                        // current interrupt 
};
```
