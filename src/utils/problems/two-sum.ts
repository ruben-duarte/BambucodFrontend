import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTwoSum = `function twoSum(nums,target){
    // Escribe tu solución aqui, happy coding!
  };`;

// Revisa si el codigo ingresado es correcto, fn es una callback
const handlerTwoSum = (fn: any) => {
	try {
		const nums = [
			[2, 7, 11, 15],
			[3, 2, 4],
			[3, 3],
		];

		const targets = [9, 6, 6];
		const answers = [
			[0, 1],
			[1, 2],
			[0, 1],
		];

		// revisar todos los casos de prueba
		for (let i = 0; i < nums.length; i++) {
			// result es el resultado del codigo ingresado por el usuario.
			const result = fn(nums[i], targets[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("twoSum handler function error");
		throw new Error(error);
	}
};


export const twoSum: Problem = {
	id: "two-sum",
	title: "1. Two Sum",
	problemStatement: `<p class='mt-3'>
    Dado un arreglo de enteros <code>nums</code> y un entero <code>target</code>, devuelve
    <em>los índices de los dos números tales que sumen</em> <code>target</code>.
  </p>
  <p class='mt-3'>
    Puedes asumir que cada entrada tendrá <strong>exactamente una solución</strong>, y no puedes
    usar el mismo elemento dos veces.
  </p>
  <p class='mt-3'>Puedes devolver la respuesta en cualquier orden.</p>`,
	examples: [
		{
			id: 1,
			inputText: "nums = [2,7,11,15], target = 9",
			outputText: "[0,1]",
			explanation: "Debido a que nums[0] + nums[1] == 9, retornamos [0, 1].",
		},
		{
			id: 2,
			inputText: "nums = [3,2,4], target = 6",
			outputText: "[1,2]",
			explanation: "Debido a que nums[1] + nums[2] == 6, retornamos [1, 2].",
		},
		{
			id: 3,
			inputText: " nums = [3,3], target = 6",
			outputText: "[0,1]",
		},
	],
	constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Solo existe una respuesta valida.</strong>
</li>`,
    starterCode: starterCodeTwoSum,
	handlerFunction: handlerTwoSum,
	starterFunctionName: "function twoSum(",
};