export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
	hint: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Dos Sumas",
		difficulty: "Fácil",
		category: "Arreglo",
		order: 1,
		videoId: "8-k1C6ehKuw",
		hint: "Utiliza un enfoque de hash table para mejorar la eficiencia."
	},
	{
		id: "reverse-linked-list",
		title: "Invertir Lista Enlazada",
		difficulty: "Difícil",
		category: "Lista Enlazada",
		order: 2,
		videoId: "",
		hint: "Intenta utilizar iteración o recursión para invertir la lista."
	},
	{
		id: "jump-game",
		title: "Juego de Saltos",
		difficulty: "Intermedio",
		category: "Programación Dinámica",
		order: 3,
		videoId: "",
		hint: "Prueba un enfoque greedy para encontrar la solución óptima."
	},
	{
		id: "valid-parentheses",
		title: "Paréntesis Válidos",
		difficulty: "Fácil",
		category: "Pila",
		order: 4,
		videoId: "xty7fr-k0TU",
		hint: "Utiliza una pila para rastrear los paréntesis abiertos y cerrados."
	},
	{
		id: "search-a-2d-matrix",
		title: "Buscar una Matriz 2D",
		difficulty: "Intermedio",
		category: "Búsqueda Binaria",
		order: 5,
		videoId: "ZfFl4torNg4",
		hint: "Divide y conquista aplicando búsqueda binaria en filas y columnas."
	},
	{
		id: "container-with-most-water",
		title: "Contenedor con Más Agua",
		difficulty: "Intermedio",
		category: "Dos Punteros",
		order: 6,
		videoId: "",
		hint: "Intenta avanzar los punteros para maximizar el área formada por los bordes."
	},
	{
		id: "merge-intervals",
		title: "Combinar Intervalos",
		difficulty: "Intermedio",
		category: "Intervalos",
		order: 7,
		videoId: "",
		hint: "Ordena los intervalos y luego combina los solapados."
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Profundidad Máxima de un Árbol Binario",
		difficulty: "Fácil",
		category: "Árbol",
		order: 8,
		videoId: "4qYTqOiRMoM",
		hint: "Utiliza un enfoque de búsqueda en profundidad (DFS) para calcular la profundidad máxima."
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Mejor Momento para Comprar y Vender Acciones",
		difficulty: "Fácil",
		category: "Arreglo",
		order: 9,
		videoId: "",
		hint: "Prueba un enfoque greedy para encontrar el mayor beneficio posible."
	},
	{
		id: "subsets",
		title: "Subconjuntos",
		difficulty: "Intermedio",
		category: "Retroceso",
		order: 10,
		videoId: "",
		hint: "Utiliza un enfoque de retroceso para generar todos los subconjuntos posibles."
	}
	
	
];