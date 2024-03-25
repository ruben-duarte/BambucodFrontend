import assert from "assert";
import { Problem } from "../types/problem";

export const validParenthesesHandler = (fn: any) => {
	try {
		const tests = ["()", "()[]{}", "(]", "([)]", "{[]}"];
		const answers = [true, true, false, false, true];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.error("Error from validParenthesesHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeValidParenthesesJS = `function validParentheses(s) {
  // Tu código aqui
};`;

export const validParentheses: Problem = {
	id: "valid-parentheses",
	title: "4. Valid Parentheses",
	problemStatement: `<p class='mt-3'>Dada una cadena <code>s</code> que contiene solo los caracteres <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> y <code>']'</code>, determina si la cadena de entrada es válida.</p>
    <p class='mt-3'>Una cadena de entrada es válida si:</p>
    <ul>
        <li class='mt-2'>Los paréntesis abiertos deben cerrarse con el mismo tipo de paréntesis.</li>
        <li class='mt-3'>Los paréntesis abiertos deben cerrarse en el orden correcto.</li>
        <li class="mt-3">Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo.</li>
    </ul>
    `,
	examples: [
		{
			id: 0,
			inputText: 's = "()"',
			outputText: "true",
		},
		{
			id: 1,
			inputText: 's = "()[]{}"',
			outputText: "true",
		},
		{
			id: 2,
			inputText: 's = "(]"',
			outputText: "false",
		},
		{
			id: 3,
			inputText: 's = "([)]"',
			outputText: "false",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li>
<li class='mt-2 '><code>s</code> Solo se consideran parentesis los siguientes <code class="text-md">'()[]{}'</code>.</li>`,
	handlerFunction: validParenthesesHandler,
	starterCode: starterCodeValidParenthesesJS,
	starterFunctionName: "function validParentheses(",

};